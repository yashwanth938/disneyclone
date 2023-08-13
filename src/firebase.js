import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmXpR0h-wgyJTBVkQsnAwf0K0DayTpJWs",
  authDomain: "disneyclone-caf18.firebaseapp.com",
  projectId: "disneyclone-caf18",
  storageBucket: "disneyclone-caf18.appspot.com",
  messagingSenderId: "422149982539",
  appId: "1:422149982539:web:8393241bd33b82c6d8c0ce",
};

const fireBaseapp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseapp);
const auth = getAuth();
//provider helps us authenticate with google
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, storage, provider };
export default db;
