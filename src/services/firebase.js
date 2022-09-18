import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db
