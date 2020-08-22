import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA76wVQGAw1ZkS5_zIa4ArSBck9lhtXWWA",
    authDomain: "projectfinder-5ee37.firebaseapp.com",
    databaseURL: "https://projectfinder-5ee37.firebaseio.com",
    projectId: "projectfinder-5ee37",
    storageBucket: "projectfinder-5ee37.appspot.com",
    messagingSenderId: "28554920254",
    appId: "1:28554920254:web:54334c29a061a8f2636c6f",
    measurementId: "G-2Q153EJXYM"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

