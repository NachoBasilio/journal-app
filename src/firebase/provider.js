import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const {
            displayName,
            email,
            photoURL,
            uid
        } = user;
        return{
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {
         // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage
        }
    }
}


export const registerWithEmail = async ({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        await updateProfile(FirebaseAuth.currentUser, {
            displayName,
        })
        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }

    } catch (error) {
         // Handle Errors here.
         
 
         return {
             ok: false,
            errorMessage: error.message
         }
    }
}