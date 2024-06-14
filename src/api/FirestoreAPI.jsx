import { firestore } from '../firebaseConfig';
import {
    addDoc,
    collection,
    onSnapshot,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

let dbRef = collection(firestore, 'posts');

export const postStatus = (object) => {
    addDoc(dbRef, object)
    .then((docRef) => {
        toast.success('Document written with ID: ', docRef.id);
    })
    .catch((err) => {
        toast.error('Error adding document: ', err);
    });
};

export const getStatus =(setAllStatus) => {
    onSnapshot(dbRef,(response) => {
        setAllStatus(
            response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id }
        }));
    })
};