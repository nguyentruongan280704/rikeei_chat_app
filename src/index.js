// Import the functions you need from the SDKs you need
import { setActiveScreen } from "./view/index";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQCi-3dPLJJ1JaBTDTQy4Iw__4dudcpOc",
  authDomain: "ngtr-an.firebaseapp.com",
  projectId: "ngtr-an",
  storageBucket: "ngtr-an.appspot.com",
  messagingSenderId: "899042462192",
  appId: "1:899042462192:web:3780eb9f92274ec4ffb535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

setActiveScreen("loginPage");
    // setActiveScreen("chatPage");
    // setActiveScreen("resetpasswordPage");
    // setActiveScreen("registerPage");

