import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: {
        id: null,
        title: "",
        body: "",
        date: null,
        imagesUrls: []
    },
}

const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

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
    deleteNoteById
} = journalSlice.actions

export default journalSlice.reducer