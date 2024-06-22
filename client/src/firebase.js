// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rent-a25c7.firebaseapp.com",
  projectId: "rent-a25c7",
  storageBucket: "rent-a25c7.appspot.com",
  messagingSenderId: "31104830614",
  appId: "1:31104830614:web:d716cf16a5ef001b0c86b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);