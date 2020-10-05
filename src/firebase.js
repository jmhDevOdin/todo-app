import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9bfCwUEOO7I21K5V7PpMaHshZx-kYtog",
  authDomain: "todo-app-5f64a.firebaseapp.com",
  databaseURL: "https://todo-app-5f64a.firebaseio.com",
  projectId: "todo-app-5f64a",
  storageBucket: "todo-app-5f64a.appspot.com",
  messagingSenderId: "791310962291",
  appId: "1:791310962291:web:305420e415c3f569bae406",
  measurementId: "G-BDWKY85MM6"
});

const db = firebaseApp.firestore();

export default db;
