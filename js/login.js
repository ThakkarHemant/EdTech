const firebaseConfig = {
  apiKey: "AIzaSyCbEEl9yZm_qoRI4Y9soR_i0Egg7eo_2iw",
  authDomain: "loginform-edtech.firebaseapp.com",
  databaseURL:
    "https://loginform-edtech-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loginform-edtech",
  storageBucket: "loginform-edtech.appspot.com",
  messagingSenderId: "436168078462",
  appId: "1:436168078462:web:64f70879a310472f88942f",
  measurementId: "G-1BJDJH9Y91",
};

//initializing firebase
firebaseConfig.initializeApp(firebaseConfig);

//reference for the database
var loginFormDB = firebase.database().ref("loginForm-EdTech");
