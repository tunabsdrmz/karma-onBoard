// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIqLSUD5Yz0OAFMfq6xoFfg2vkMNVYIJU",
  authDomain: "karma-57b57.firebaseapp.com",
  databaseURL: "https://karma-57b57-default-rtdb.firebaseio.com",
  projectId: "karma-57b57",
  storageBucket: "karma-57b57.appspot.com",
  messagingSenderId: "118670405045",
  appId: "1:118670405045:web:dee342ae7a7eab0a4cbdfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const database = getDatabase(app);

export {auth, database}