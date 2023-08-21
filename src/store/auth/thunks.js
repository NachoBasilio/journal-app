import { checkingCredentials } from "./authSlice"

export function checkingAuth (email, password){
    return async function (dispatch){
        dispatch(checkingCredentials())
    }
}

export function startGoogleSingIn (){
    return async function (dispatch){
        dispatch(checkingCredentials())
    }
}