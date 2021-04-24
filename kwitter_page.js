var firebaseConfig = {
    apiKey : "AIzaSyCjfPMPwGQGVit40kYEDV70PB2DfQLlBaE",
    authDomain : "kwitter-practice-2e254.firebaseapp.com",
    databaseURL :"https://kwitter-practice-2e254-default-rtdb.firebaseio.com", 
    projectId : "kwitter-practice-2e254",
    storageBucket : "kwitter-practice-2e254.appspot.com",
    messagingSenderId : "168010427840",
    appId : "1: 168010427840: web: bd4fb1a6984def3e6eec25" };
     // Initialize Firebase
       firebase . initializeApp ( firebaseConfig );

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
       
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
    //Start code
       
    //End code
    } });  }); }
    getData();

    function send() {
    msg = document.getElementById("msg") .value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });

      document.getElementById("msg").value = "";
    }

    function logout() {
      localStorage.removeItem("room_name");

      localStorage.removeItem("user_name");

      window.location = "kwitter_room.html";
}