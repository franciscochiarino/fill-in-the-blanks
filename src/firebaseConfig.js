// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPn6aHW-T3Q3fPtajoLOSsJnjxxX0SD8o",
  authDomain: "fill-in-the-blanks-86d07.firebaseapp.com",
  projectId: "fill-in-the-blanks-86d07",
  storageBucket: "fill-in-the-blanks-86d07.appspot.com",
  messagingSenderId: "1024101598440",
  appId: "1:1024101598440:web:bcc49e44d585029baff55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
