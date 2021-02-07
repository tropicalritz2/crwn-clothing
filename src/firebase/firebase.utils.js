import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWpBqJwSk7GlUY4sPu1FNrzDoRJ54Y2sE",
    authDomain: "crwn-db-8a017.firebaseapp.com",
    projectId: "crwn-db-8a017",
    storageBucket: "crwn-db-8a017.appspot.com",
    messagingSenderId: "407288036910",
    appId: "1:407288036910:web:71a8f94921b83e84b7e9bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;