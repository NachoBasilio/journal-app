import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirestoreDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        dispatch(savingNewNote())

        const {uid} = getState().auth; 


        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
            inmageUrls: []
        }
        
        const newDoc = doc(collection(FirestoreDB, `${uid}/journal/notes`));

        const setDocResp = await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote) )
        dispatch(setActiveNote(newNote) )
    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth; 
        if (!uid) throw new Error("uid is required");
        
        const notas = await loadNotes(uid)
        dispatch(setNotes(notas))
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())

        const {uid} = getState().auth; 
        if (!uid) throw new Error("uid is required");

        const {active} = getState().journal;
        dispatch(updateNote(active))
        
        const noteToSave = {...active};
        delete noteToSave.id;
        
        const docRef = doc(FirestoreDB, `${uid}/journal/notes/${active.id}`);
        await setDoc(docRef, noteToSave, {merge: true});

    }
}


export const startUploadingFiles = (files=[]) => {
    return async (dispatch, getState) =>{
        dispatch(setSaving())

        const fileUpladPromises = []
        for(const title of files){
            fileUpladPromises.push(fileUpload(title))

        }
       
        const photosUrls = await Promise.all(fileUpladPromises)
        console.log(photosUrls)

        dispatch(setPhotosToActiveNote(photosUrls))
    }
}