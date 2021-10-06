import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

    apiKey: "AIzaSyB23yeBH0i6NuDH3vizMFQa1RwuI-5v0fs",

    authDomain: "product-feedback-app-e1792.firebaseapp.com",

    projectId: "product-feedback-app-e1792",

    storageBucket: "product-feedback-app-e1792.appspot.com",

    messagingSenderId: "670693102160",

    appId: "1:670693102160:web:eb9371c218672c8448f755"

};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp }

// 106 108 111 112 117 118