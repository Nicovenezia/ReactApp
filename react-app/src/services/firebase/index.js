
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAoMKC-tXsv4TkrMFqxAjXcs5ZHeAMokxY",
  authDomain: "backend--1.firebaseapp.com",
  projectId: "backend--1",
  storageBucket: "backend--1.appspot.com",
  messagingSenderId: "1037430515562",
  appId: "1:1037430515562:web:7e3956dcaae8a990fb6713"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)