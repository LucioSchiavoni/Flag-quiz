// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeBa5UUHTGolU-POs6T_KnkKIi5RiC56Q",
    authDomain: "quiz-flags-1798.firebaseapp.com",
    projectId: "quiz-flags-1798",
    storageBucket: "quiz-flags-1798.appspot.com",
    messagingSenderId: "791535024058",
    appId: "1:791535024058:web:cc7a151fcee364a382cf83",
    measurementId: "G-0R32PF6MC7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)