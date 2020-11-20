import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACaG1PI-s4OKP_B2v6V8uYmuAhNekN6Os",
  authDomain: "netflix-clone-14b44.firebaseapp.com",
  databaseURL: "https://netflix-clone-14b44.firebaseio.com",
  projectId: "netflix-clone-14b44",
  storageBucket: "netflix-clone-14b44.appspot.com",
  messagingSenderId: "845543563669",
  appId: "1:845543563669:web:da6ebfbefd463fe115569c",
  measurementId: "G-QWY4MTJ9NR",
};

const firebase = Firebase.initializeApp(firebaseConfig);

seedDatabase(firebase);
export { firebase };
