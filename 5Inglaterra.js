 var firebaseConfig = {
    apiKey: "AIzaSyD-e7xqaLF2AUgOeY6UlY3giOwp6g96nOI",
    authDomain: "sfpba-240fd.firebaseapp.com",
    databaseURL: "https://sfpba-240fd-default-rtdb.firebaseio.com",
    projectId: "sfpba-240fd",
    storageBucket: "sfpba-240fd.appspot.com",
    messagingSenderId: "1098961656742",
    appId: "1:1098961656742:web:d2f85cf1551c02f23f8d67",
    measurementId: "G-9BQBBYQJM9"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="⚽Saludos⚽ "+user_name;

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
    window.location ="6Portugal.html";
    
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="6Portugal.html";
  }

  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("1Argentina.html")
  }



      

 