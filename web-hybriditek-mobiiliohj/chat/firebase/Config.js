import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, query, onSnapshot } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQjsUOvNip01Oqi6j3T15EWM3qpQ2nvQ",
  authDomain: "chat-12217.firebaseapp.com",
  projectId: "chat-12217",
  storageBucket: "chat-12217.appspot.com",
  messagingSenderId: "862441013848",
  appId: "1:862441013848:web:45288584af82255887802d"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES
};
