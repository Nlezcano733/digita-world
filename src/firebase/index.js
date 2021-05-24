import firebase from 'firebase';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA1iVaHPsYupwz6vSUlxp3R5SnFyTdgjLE",
    authDomain: "ecommerce-beta-f3cc2.firebaseapp.com",
    projectId: "ecommerce-beta-f3cc2",
    storageBucket: "ecommerce-beta-f3cc2.appspot.com",
    messagingSenderId: "662879151318",
    appId: "1:662879151318:web:e5a318015abece6a55d577"
});

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app);