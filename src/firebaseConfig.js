// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOZH5vvyoA6-YX3uc5zJOfF1PxZKbCJAg",
  authDomain: "linkedin-clone-a70ed.firebaseapp.com",
  projectId: "linkedin-clone-a70ed",
  storageBucket: "linkedin-clone-a70ed.appspot.com",
  messagingSenderId: "391118211972",
  appId: "1:391118211972:web:f189501d6400c86dd06bd1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth,app };
