// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmvq151QTN5_zGN3dd1QxVzBghjUIyosc",
  authDomain: "vite-contact-f525e.firebaseapp.com",
  projectId: "vite-contact-f525e",
  storageBucket: "vite-contact-f525e.appspot.com",
  messagingSenderId: "68989931304",
  appId: "1:68989931304:web:1f96107beec4c55a664a1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

