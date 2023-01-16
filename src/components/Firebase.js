import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC7zyGQGYNUBV6OZYGfgyqDfXRPSuVqoos",
    authDomain: "react-ipod-b4970.firebaseapp.com",
    projectId: "react-ipod-b4970",
    storageBucket: "react-ipod-b4970.appspot.com",
    messagingSenderId: "481202968250",
    appId: "1:481202968250:web:bc075335ecd107fd789483",
    measurementId: "G-0R2HCC1NRZ"
  };


  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {storage  , firebase as default}

  