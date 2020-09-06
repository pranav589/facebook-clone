import firebase from "firebase"

export const firebaseConfig =firebase.initializeApp({
  apiKey: "AIzaSyDB0l3qY3s5IUSpKIn4JVHltwYORDy3rbY",
  authDomain: "facebook-clone-4174a.firebaseapp.com",
  databaseURL: "https://facebook-clone-4174a.firebaseio.com",
  projectId: "facebook-clone-4174a",
  storageBucket: "facebook-clone-4174a.appspot.com",
  messagingSenderId: "852640015562",
  appId: "1:852640015562:web:4239d44698b25065790033",
  measurementId: "G-GDVVNY4JWH"
});

export const auth=firebase.auth();
export const db=firebaseConfig.firestore()
export const storage=firebase.storage()


