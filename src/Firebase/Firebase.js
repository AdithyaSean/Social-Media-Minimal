import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARL_225BTcX7mojlh8QdTEv9tqE_JahZs",
  authDomain: "instagram-clone-c1013.firebaseapp.com",
  projectId: "instagram-clone-c1013",
  storageBucket: "instagram-clone-c1013.appspot.com",
  messagingSenderId: "553210423558",
  appId: "1:553210423558:web:88e1f3e1a11a16e2a59687",
  measurementId: "G-RQ8K5R7C2S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app ,auth, firestore, storage};