import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9OluXDIcn8WLVurVeMIJxazZYvQQ79Bs",
    authDomain: "game-site-2a632.firebaseapp.com",
    databaseURL: "https://game-site-2a632-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "game-site-2a632",
    storageBucket: "game-site-2a632.appspot.com",
    messagingSenderId: "333537408032",
    appId: "1:333537408032:web:fdf39a8e93aa84df9df845"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
