import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDHpohpZfTtYt3ZLuinuwq508waZIymiAY",
    authDomain: "fir-9d3f4.firebaseapp.com",
    projectId: "fir-9d3f4",
    storageBucket: "fir-9d3f4.appspot.com",
    messagingSenderId: "447072096142",
    appId: "1:447072096142:web:14144c7df02a604b0cdedf",
    measurementId: "G-XFMM4Y4J1Z"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };