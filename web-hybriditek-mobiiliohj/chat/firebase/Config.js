import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp, query, onSnapshot } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADkrzQKKk1jS-chQDNsrhfcG82vKa3bnE",
  authDomain: "chat-dc26f.firebaseapp.com",
  projectId: "chat-dc26f",
  storageBucket: "chat-dc26f.appspot.com",
  messagingSenderId: "702264920486",
  appId: "1:702264920486:web:75fb4142588f38b81e6767"
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
