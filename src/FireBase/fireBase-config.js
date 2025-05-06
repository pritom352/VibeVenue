// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5PgwT6lJOXs3kK_3S6QhCmTySSdxDpdw",
  authDomain: "assignment-9-f1b23.firebaseapp.com",
  projectId: "assignment-9-f1b23",
  storageBucket: "assignment-9-f1b23.firebasestorage.app",
  messagingSenderId: "458838260702",
  appId: "1:458838260702:web:405c2782aa4f060e0b7b4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
