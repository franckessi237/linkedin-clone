import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
 } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = async (email, password) => {
  try {
    let response =  signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    alert(err.errors.message);
  }
};

export const RegisterAPI = async (email, password) => {
  try {
    let response =  createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

export const GoogleSignInAPI = async () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};
