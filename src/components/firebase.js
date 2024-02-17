import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDmWqmYRAOXZsbyxBLDZ3KHu3Q-ut7aatA",
    authDomain: "new-linkedin-proj.firebaseapp.com",
    projectId: "new-linkedin-proj",
    storageBucket: "new-linkedin-proj.appspot.com",
    messagingSenderId: "208110971060",
    appId: "1:208110971060:web:5e2890da54cdce6fe6cfe1"
  };


  const firebaseApp =firebase.intializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};