import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAdzBgoYBvWFzk62gLU5dmH6X0rTJMkefI",
  authDomain: "the-nap-app-799be.firebaseapp.com",
  projectId: "the-nap-app-799be",
  storageBucket: "the-nap-app-799be.appspot.com",
  messagingSenderId: "750432167945",
  appId: "1:750432167945:web:1c63c484ec3908b98b70d8",
  measurementId: "G-95VV7G5EF2"
};

const app = initializeApp(firebaseConfig);
