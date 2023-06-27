import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXxGO1050w8VLqLHRd-rgbf3ykSgXPv_0",
    authDomain: "olx-clone-8cc84.firebaseapp.com",
    projectId: "olx-clone-8cc84",
    storageBucket: "olx-clone-8cc84.appspot.com",
    messagingSenderId: "441273917604",
    appId: "1:441273917604:web:8797104f86ab1404324631",
    measurementId: "G-EZYW81CDNW"
  };

export default firebase.initializeApp(firebaseConfig);
