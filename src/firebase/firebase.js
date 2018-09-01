import * as firebase from 'firebase';

const config ={
  apiKey: "AIzaSyAhwW-e5dLuo4A68jq0iXVnFewO8cB7KrE",
  authDomain: "budget-app-67066.firebaseapp.com",
  databaseURL: "https://budget-app-67066.firebaseio.com",
  projectId: "budget-app-67066",
  storageBucket: "budget-app-67066.appspot.com",
  messagingSenderId: "822299686467"
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };