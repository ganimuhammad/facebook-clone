import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJoo1hAaAzqZfzU64KP74ALk6qKaiRXrs",
  authDomain: "facebook-clone-e09d3.firebaseapp.com",
  databaseURL: "https://facebook-clone-e09d3.firebaseio.com",
  projectId: "facebook-clone-e09d3",
  storageBucket: "facebook-clone-e09d3.appspot.com",
  messagingSenderId: "762151241215",
  appId: "1:762151241215:web:287b04bc95459f830c53ca",
  measurementId: "G-5C2V7C8EP5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
