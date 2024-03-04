import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, query, onSnapshot } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM9fFp5tyrAVmprB8tG5NojqHZmyVZG04",
  authDomain: "chat-fef0e.firebaseapp.com",
  projectId: "chat-fef0e",
  storageBucket: "chat-fef0e.appspot.com",
  messagingSenderId: "852255533796",
  appId: "1:852255533796:web:b8c2200a0dfd5c30ca5af1"
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
