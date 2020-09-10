import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbbOnyymSNH6oiRohjHbANpVipDVqE4mg",
  authDomain: "amoudazon.firebaseapp.com",
  databaseURL: "https://amoudazon.firebaseio.com",
  projectId: "amoudazon",
  storageBucket: "amoudazon.appspot.com",
  messagingSenderId: "308056169345",
  appId: "1:308056169345:web:61446f0bbda479610f6680",
  measurementId: "G-EZT8WQWXS4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
