// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sf1d0Ex6G6RW0m5cBgtaoMuSzRW1vLA",
  authDomain: "todo-app-95c44.firebaseapp.com",
  projectId:  "todo-app-95c44",
  storageBucket: "todo-app-95c44.appspot.com",
  messagingSenderId: "1098593802143",
  appId: "1:1098593802143:web:00ab0381728c28cd1b8faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)