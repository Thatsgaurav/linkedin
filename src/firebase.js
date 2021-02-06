import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCTuDqdPJQUw9Za48dKjFlrmxLR1YhWyog",
    authDomain: "linkedin-clone-612c1.firebaseapp.com",
    projectId: "linkedin-clone-612c1",
    storageBucket: "linkedin-clone-612c1.appspot.com",
    messagingSenderId: "905882527864",
    appId: "1:905882527864:web:18ee63f53ad7c3212ea58d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };