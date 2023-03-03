// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9a5oS5AXVa51TYiLQKSBWufbldzWk4QI",
  authDomain: "spotify-f44a2.firebaseapp.com",
  projectId: "spotify-f44a2",
  storageBucket: "spotify-f44a2.appspot.com",
  messagingSenderId: "377497439678",
  appId: "1:377497439678:web:a723f570426e59aedafdef",
  measurementId: "G-R7M9HDKF6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);