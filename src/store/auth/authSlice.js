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
    login: (state, action) => {},
    logout: (state, action) => {},
    setError: (state, action) => {},
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