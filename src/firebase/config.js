// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhY482MCOM92XdBHvUYxfj5IibGmOB1ro",
  authDomain: "journalapp-5ec95.firebaseapp.com",
  projectId: "journalapp-5ec95",
  storageBucket: "journalapp-5ec95.appspot.com",
  messagingSenderId: "39898183927",
  appId: "1:39898183927:web:df34215f37faad31f9bbf2"
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirestoreDB = getFirestore(FirebaseApp);