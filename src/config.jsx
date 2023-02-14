// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt8j82X47dguAbSJiAIyXS82znsQOuT9E",
  authDomain: "web-probile.firebaseapp.com",
  projectId: "web-probile",
  storageBucket: "web-probile.appspot.com",
  messagingSenderId: "695665740653",
  appId: "1:695665740653:web:8298c11130da34de90e864",
  measurementId: "G-Y16BPZVLE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth