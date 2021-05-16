
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA58U48VI1duHYYf0PMPxK2YOz5PQ9gVoM",
      authDomain: "let-chat-web-app-19021.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-19021-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-19021",
      storageBucket: "let-chat-web-app-19021.appspot.com",
      messagingSenderId: "319697156119",
      appId: "1:319697156119:web:94f4030e0ed73359000452",
      measurementId: "G-1QJ34T5BHL"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
username=localStorage.getItem("username_key");
document.getElementById("user_name").innerHTML="welcome "+username+" !";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
