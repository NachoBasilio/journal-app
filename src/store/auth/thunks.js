import { registerWithEmail, singInWithGoogle } from "../../firebase/provider"
import { checkingCredentials, login, logout, setError } from "./authSlice"

export function checkingAuth (email, password){
    return async function (dispatch){
        dispatch(checkingCredentials())
    }
}

export function startGoogleSingIn (){
    return async function (dispatch){
        dispatch(checkingCredentials())
        const result = await singInWithGoogle()
        if(result.ok){
            return dispatch(login(
                result
            ))
        }else{
            return dispatch(setError(result.errorMessage))
        }
    }
}

export function startWithMailSingIn({email, password, displayName}){
    return async function (dispatch){
        dispatch(checkingCredentials())
        const resp = await registerWithEmail({email, password, displayName})

        if(resp.ok){
            return dispatch(login(
                resp
            ))
        }else{
            return dispatch(setError(resp.errorMessage))
        }
    }
}