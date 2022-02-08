var firebaseConfig = {
      apiKey: "AIzaSyA9LWJaKzZCfpOUEZxeD6vfcgE7BglGBTw",
      authDomain: "kwitter-data-base-78211.firebaseapp.com",
      databaseURL: "https://kwitter-data-base-78211-default-rtdb.firebaseio.com",
      projectId: "kwitter-data-base-78211",
      storageBucket: "kwitter-data-base-78211.appspot.com",
      messagingSenderId: "715702200660",
      appId: "1:715702200660:web:34b144d890b95090c5c0c1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("username").innerHTML="Welcome "+username+"!";

    function addroom()
    {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose:"adding room"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout()
{
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location="index.html";
}
