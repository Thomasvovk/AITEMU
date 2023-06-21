// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCc41ojshQEP581fdmt-xymueGGGJoo5UU",
  authDomain: "aitemu-a54fc.firebaseapp.com",
  databaseURL: "https://aitemu-a54fc-default-rtdb.firebaseio.com",
  projectId: "aitemu-a54fc",
  storageBucket: "aitemu-a54fc.appspot.com",
  messagingSenderId: "715989601495",
  appId: "1:715989601495:web:ee22e4e8b19bd20f49b492",
});

export const auth = app.auth();
export const db = getFirestore(app);
