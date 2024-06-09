// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Ye1ZfbP-gqROAHZtVYtSbmaWt1X3xzM",
  authDomain: "anime-station-7b2e4.firebaseapp.com",
  databaseURL:
    "https://anime-station-7b2e4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "anime-station-7b2e4",
  storageBucket: "anime-station-7b2e4.appspot.com",
  messagingSenderId: "783150705303",
  appId: "1:783150705303:web:fa4e1b64757586e0c417d2",
  measurementId: "G-7T3T8PG0BQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
