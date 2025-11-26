import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";
import {getStorage}  from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cashapp-d7f90.firebaseapp.com",
  projectId: "cashapp-d7f90",
  storageBucket: "cashapp-d7f90.firebasestorage.app",
  messagingSenderId: "780081941720",
  appId: "1:780081941720:web:b7436b4507c1945c14dbad"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export{db,storage};