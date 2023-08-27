import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
}

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    savingNewNote: (state) =>{
        state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
    },
    setActiveNote: (state, action) => {
        state.active = action.payload;
        state.messageSaved = "";
    },
    setNotes: (state, action) => {
        state.notes = action.payload;
    },
    setSaving: (state, action) => {
        state.isSaving = true;
        state.messageSaved = "";
    },
    updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map( note => {
            if (note.id === action.payload.id) {
                return action.payload
            } else {
                return note
            }
        })

        state.messageSaved = action.payload.title + ", actualizado!";
    },
    deleteNoteById: (state, action) => {

    },
    setPhotosToActiveNote: (state, action) => {
        state.active.inmageUrls = [ ...state.active.inmageUrls, ...action.payload]
        state.isSaving = false;
    }
  }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote
} = journalSlice.actions

export default journalSlice.reducer