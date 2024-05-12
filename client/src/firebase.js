// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5e126.firebaseapp.com",
  projectId: "mern-estate-5e126",
  storageBucket: "mern-estate-5e126.appspot.com",
  messagingSenderId: "222522249915",
  appId: "1:222522249915:web:22cc5d7cf41408eec54f9e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);