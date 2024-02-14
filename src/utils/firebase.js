// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Gl5haymJxyXFquxdcMCY22mRp6yUsWo",
  authDomain: "netflixgpt-22c71.firebaseapp.com",
  projectId: "netflixgpt-22c71",
  storageBucket: "netflixgpt-22c71.appspot.com",
  messagingSenderId: "994830685292",
  appId: "1:994830685292:web:7e9d6b30b0303304127449",
  measurementId: "G-9XXHB46QYK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
