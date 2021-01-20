import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvNGp6Rx9Xzp9PU-z_orYAIJyB8H1Tz4I",
    authDomain: "clone-defa8.firebaseapp.com",
    projectId: "clone-defa8",
    storageBucket: "clone-defa8.appspot.com",
    messagingSenderId: "152097179784",
    appId: "1:152097179784:web:47e73f3dcbaabeefaf373d",
    measurementId: "G-G8QPS20JTG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};