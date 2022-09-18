import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpLEPokd4vkjKsLlwyMRQWYSatNoWebno",
    authDomain: "atp-devweb.firebaseapp.com",
    projectId: "atp-devweb",
    storageBucket: "atp-devweb.appspot.com",
    messagingSenderId: "874229359248"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db