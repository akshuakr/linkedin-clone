import firebase from "firebase";



const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: "linkedin-clone-49bcd.firebaseapp.com",
    projectId: "linkedin-clone-49bcd",
    storageBucket: "linkedin-clone-49bcd.appspot.com",
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APPID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
