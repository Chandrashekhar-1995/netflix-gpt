// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl4wXTEBAk3JLd-AzotSkoVIG6nXtXURo",
  authDomain: "netflixgpt-fa108.firebaseapp.com",
  projectId: "netflixgpt-fa108",
  storageBucket: "netflixgpt-fa108.appspot.com",
  messagingSenderId: "790287694164",
  appId: "1:790287694164:web:66ec34b198dee43cca30c1",
  measurementId: "G-L006DWSK14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);