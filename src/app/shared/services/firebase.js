//import "../../../../node_modules/firebase/firebase-app";
//import "../../../../node_modules/firebase/firebase-firestore";
//import "../../../../node_modules/firebase/firebase-auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, auth} from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvgw4gPAhU8ysdL2H31n8_eIewNe_ZyT8",
  authDomain: "tcc-action.firebaseapp.com",
  databaseURL: "https://tcc-action-default-rtdb.firebaseio.com",
  projectId: "tcc-action",
  storageBucket: "tcc-action.appspot.com",
  messagingSenderId: "507875655067",
  appId: "1:507875655067:web:9fec887a45d5639ef9b53e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export const auth = getAuth(app);

const auth2=firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
setTimeout(() => {
  auth.signInWithPopup(provider)
}, 3000);

auth.onAuthStateChanged((val)=>{
  if(val){
    alert('Logado com sucesso!')
  }
})