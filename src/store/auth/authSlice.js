import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'no-autenticado', //"no-autenticado, autenticado, chequeando"
    uid: null,
    name: null,
    email: null,
    photoURL: null,
    errorMesaage: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = "autenticado";
      state.uid = action.payload.uid;
      state.name = action.payload.displayName;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.errorMesaage = null
    },
    logout: (state, action) => {
      state.status = "no-autenticado";
      state.uid = null;
      state.name = null;
      state.email = null;
      state.photoURL = null;
      state.errorMesaage = null
    },
    setError: (state, action) => {
      state.errorMesaage = action.payload;
    },
    checkingCredentials: (state, action) => {
      state.status = "chequeando";
    },
  }
});

export const {
    login,
    logout,
    setError,
    checkingCredentials
} = authSlice.actions

export default authSlice.reducer