var app_firebase ={};
(function(){
    // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKXC1Wg5UVC2lY1YOaBJT9Wdqrn3KzrQc",
    authDomain: "harith-website.firebaseapp.com",
    databaseURL: "https://harith-website.firebaseio.com",
    projectId: "harith-website",
    storageBucket: "harith-website.appspot.com",
    messagingSenderId: "552910064054",
    appId: "1:552910064054:web:468738ee85403b96981917",
    measurementId: "G-Y85CCR4YWD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
})()