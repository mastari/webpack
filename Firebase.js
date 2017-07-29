import * as firebase from "firebase";

const config = {

  // Initialize Firebase
    apiKey: "AIzaSyA_FcEK30U7tCR15VcswTMUPJMsG15jzuU",
    authDomain: "planner-app-a6d5a.firebaseapp.com",
    databaseURL: "https://planner-app-a6d5a.firebaseio.com",
    projectId: "planner-app-a6d5a",
    storageBucket: "planner-app-a6d5a.appspot.com",
    messagingSenderId: "846349754206"
  };

firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

module.exports = {
  fb: firebase,
  provider: provider
}