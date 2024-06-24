// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeqcevKv2SGPjfzDZoEh60wu6blrmIJc",
  authDomain: "todo-list-881bb.firebaseapp.com",
  projectId: "todo-list-881bb",
  storageBucket: "todo-list-881bb.appspot.com",
  messagingSenderId: "662994240096",
  appId: "1:662994240096:web:e505ae12b72349a169f905",
  measurementId: "G-TMKMV9EV87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db};