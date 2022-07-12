import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb0zaVGSEyRZA0hLcgUs5UEzxgan5OulY",
  authDomain: "td-blogging.firebaseapp.com",
  projectId: "td-blogging",
  storageBucket: "td-blogging.appspot.com",
  messagingSenderId: "87281292045",
  appId: "1:87281292045:web:639262dbcf494752fd1644",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
