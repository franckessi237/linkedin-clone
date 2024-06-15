// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOZH5vvyoA6-YX3uc5zJOfF1PxZKbCJAg",
    authDomain: "linkedin-clone-a70ed.firebaseapp.com",
    projectId: "linkedin-clone-a70ed",
    storageBucket: "linkedin-clone-a70ed.appspot.com",
    messagingSenderId: "391118211972",
    appId: "1:391118211972:web:f189501d6400c86dd06bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };
