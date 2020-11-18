import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcHUAi9I4w-c0XBDVGMY7fJWLLor2WR-E",
  authDomain: "ecommerce-redux-react-25a5d.firebaseapp.com",
  databaseURL: "https://ecommerce-redux-react-25a5d.firebaseio.com",
  projectId: "ecommerce-redux-react-25a5d",
  storageBucket: "ecommerce-redux-react-25a5d.appspot.com",
  messagingSenderId: "355115805257",
  appId: "1:355115805257:web:3b568326cadf6c0ed86d98",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
