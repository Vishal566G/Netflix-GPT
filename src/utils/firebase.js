// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXBQiVVPBzBI1s4mXD_OObqoqrFkab0bA",
  authDomain: "netflixgpt-4cc91.firebaseapp.com",
  projectId: "netflixgpt-4cc91",
  storageBucket: "netflixgpt-4cc91.firebasestorage.app",
  messagingSenderId: "408086637388",
  appId: "1:408086637388:web:940d57394636917f23bde9",
  measurementId: "G-LBEDB6TEBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
