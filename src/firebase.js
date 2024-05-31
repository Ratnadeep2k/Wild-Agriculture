// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSDkMncsHs-8RxWW80g2OZB0a07qLRDL0",
  authDomain: "wild-agriculture-a120c.firebaseapp.com",
  projectId: "wild-agriculture-a120c",
  storageBucket: "wild-agriculture-a120c.appspot.com",
  messagingSenderId: "897206796254",
  appId: "1:897206796254:web:b86cfa32a18091f846e74f",
  measurementId: "G-RS9Q4G3786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {db, auth, storage }