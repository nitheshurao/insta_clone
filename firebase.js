import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBN-SYAnApIhbh7hyDQFe-63ORSHsqTokU",
    authDomain: "instagarm-c7ea4.firebaseapp.com",
    databaseURL: "https://instagarm-c7ea4.firebaseio.com",
    projectId: "instagarm-c7ea4",
    storageBucket: "instagarm-c7ea4.appspot.com",
    messagingSenderId: "1040589984100",
    appId: "1:1040589984100:web:6815d5d0bb39fca0526a71",
    measurementId: "G-GQVERZY3GH"
  };
  const firebaseapp =firebase.initializeApp
  (firebaseConfig);
  const dp =firebaseapp.firestore();

  export default dp;