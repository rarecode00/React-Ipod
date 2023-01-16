import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: "react-ipod-b4970",
    storageBucket: "react-ipod-b4970.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: "G-0R2HCC1NRZ"
  };


  firebase.initializeApp(firebaseConfig)

  const storage = firebase.storage();

  export {storage  , firebase as default}

  