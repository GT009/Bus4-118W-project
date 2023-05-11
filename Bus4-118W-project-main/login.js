const firebaseConfig = {
  apiKey: "AIzaSyAUcf1QcV9BZfLOEAjUIGj7N4tmUlujgBU",
  authDomain: "login-64f70.firebaseapp.com",
  databaseURL: "https://login-64f70-default-rtdb.firebaseio.com",
  projectId: "login-64f70",
  storageBucket: "login-64f70.appspot.com",
  messagingSenderId: "733243802578",
  appId: "1:733243802578:web:0ad6667252e15efd7b3e0b"
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child('userdetails');
detailsRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send(){
var email = document.getElementById("email").value;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var tel = document.getElementById("tel").value;
var date = document.getElementById("date").value;

detailsRef.push().set({
email: email,
username: username,
password: password,
tel: tel,
date: date,
});
}