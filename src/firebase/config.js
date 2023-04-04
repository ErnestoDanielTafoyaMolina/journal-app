// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyflLwT8UhBeK5REkZxgWEMWd3f-sRYaA",
  authDomain: "react-cursos-2-f6ee5.firebaseapp.com",
  projectId: "react-cursos-2-f6ee5",
  storageBucket: "react-cursos-2-f6ee5.appspot.com",
  messagingSenderId: "817437521452",
  appId: "1:817437521452:web:49ed89c6d6f2f5b3434389"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );