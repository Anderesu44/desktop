// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4o_Guke-JcV3ToHVfZYg-U8B5WeFdnQc",
  authDomain: "test-app-62a1a.firebaseapp.com",
  databaseURL: "https://test-app-62a1a-default-rtdb.firebaseio.com",
  projectId: "test-app-62a1a",
  storageBucket: "test-app-62a1a.appspot.com",
  messagingSenderId: "110469048811",
  appId: "1:110469048811:web:3ec7430181bb41405551ae",
  measurementId: "G-6N0WECC0XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);