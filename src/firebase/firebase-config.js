import "firebase/firestore";
import "firebase/auth";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2IHYw_sOW8DQunayvb9a7H4szxSEPAwg",
    authDomain: "react-app-cursos-a6251.firebaseapp.com",
    projectId: "react-app-cursos-a6251",
    storageBucket: "react-app-cursos-a6251.appspot.com",
    messagingSenderId: "887657366088",
    appId: "1:887657366088:web:f8de609d2fbfbf228e0e7d"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    
}