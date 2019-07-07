import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDXr90CljfAUf-S3Pjr4i4CcdR0E9los8c",
  authDomain: "photowall-e768c.firebaseapp.com",
  databaseURL: "https://photowall-e768c.firebaseio.com",
  projectId: "photowall-e768c",
  storageBucket: "photowall-e768c.appspot.com",
  messagingSenderId: "813338147206",
  appId: "1:813338147206:web:a05facc1bcd4f791"
};

firebase.initializeApp(config);
const database = firebase.database();

export { database };
