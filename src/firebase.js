// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { config } from "dotenv";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "alter-office-assignment.firebaseapp.com",
    projectId: "alter-office-assignment",
    storageBucket: "alter-office-assignment.appspot.com",
    messagingSenderId: "450417276407",
    appId: "1:450417276407:web:2ee90ff331b3ea89132af2",
    measurementId: "G-TGBZ0W0RQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
