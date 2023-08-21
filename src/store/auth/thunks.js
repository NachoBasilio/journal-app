import { singInWithGoogle } from "../../firebase/provider"
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