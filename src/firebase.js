import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDmXpR0h-wgyJTBVkQsnAwf0K0DayTpJWs",
  authDomain: "disneyclone-caf18.firebaseapp.com",
  projectId: "disneyclone-caf18",
  storageBucket: "disneyclone-caf18.appspot.com",
  messagingSenderId: "422149982539",
  appId: "1:422149982539:web:8393241bd33b82c6d8c0ce",
};

const fireBaseapp = firebase.initializeApp(firebaseConfig);
const db = fireBaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
//const app = initializeApp(firebaseConfig);
