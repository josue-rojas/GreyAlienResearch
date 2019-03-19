import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCrMv1D5YC4CInVWUZ9b1QrzfkcWID9COw",
    authDomain: "signupsite-c0e8e.firebaseapp.com",
    databaseURL: "https://signupsite-c0e8e.firebaseio.com",
    projectId: "signupsite-c0e8e",
    storageBucket: "signupsite-c0e8e.appspot.com",
    messagingSenderId: "30387726407"
  };

firebase.initializeApp(config);
export default firebase;
