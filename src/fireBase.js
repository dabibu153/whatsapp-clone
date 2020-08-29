import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUBqQD3sPrA28GfPcjtUT7TuW8xwL86aA",
  authDomain: "whatsapp-clone-5f05a.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-5f05a.firebaseio.com",
  projectId: "whatsapp-clone-5f05a",
  storageBucket: "whatsapp-clone-5f05a.appspot.com",
  messagingSenderId: "1061165194703",
  appId: "1:1061165194703:web:cf634d7035396a20d5c6ba",
  measurementId: "G-JWTV19QYMJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
