import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirestoreDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNote } from "./journalSlice";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        
        dispatch(savingNewNote())

        const {uid} = getState().auth; 


        const newNote = {
            title: "",
            body: "",
            date: null,
        }
        
        const newDoc = doc(collection(FirestoreDB, `${uid}/journal/notes`));

        const setDocResp = await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote) )
        dispatch(setActiveNote(newNote) )
    }
}