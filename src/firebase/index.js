import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAxfiw_IBPWrgKg93wSGDp0sj6B81nTR8I",
    authDomain: "digitalworld-ecommerce.firebaseapp.com",
    projectId: "digitalworld-ecommerce",
    storageBucket: "digitalworld-ecommerce.appspot.com",
    messagingSenderId: "466455624582",
    appId: "1:466455624582:web:29351228a5f3a48b434a07",
    measurementId: "G-4748ZBN4D7"
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app);