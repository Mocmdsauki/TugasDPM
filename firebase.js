import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAgerWa7QQwr2hmTPHaD6RuD2fa_WKB5aU",
  authDomain: "sky-dpm.firebaseapp.com",
  projectId: "sky-dpm",
  storageBucket: "sky-dpm.appspot.com",
  messagingSenderId: "537223358695",
  appId: "1:537223358695:web:5aaddf8b11c66e6ac99a42"
};

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth};