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
    },
    setNotes: (state, action) => {

    },
    setSaving: (state, action) => {

    },
    updateNote: (state, action) => {

    },
    deleteNoteById: (state, action) => {

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
    savingNewNote
} = journalSlice.actions

export default journalSlice.reducer