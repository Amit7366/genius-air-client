// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIu962QvH4IsFrqFH8mmiPb1_SKO3AZ7Y",
  authDomain: "genius-air-school.firebaseapp.com",
  projectId: "genius-air-school",
  storageBucket: "genius-air-school.appspot.com",
  messagingSenderId: "730200322292",
  appId: "1:730200322292:web:f630339937bc5797b12ea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;