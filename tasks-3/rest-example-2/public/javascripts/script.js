var url = "http://127.0.0.1:3000/users";


var editedUserName = document.getElementById("edit-user-name");
var editedUserSurname = document.getElementById("edit-user-surname");
var editedUserEmail = document.getElementById("edit-user-email");
var editedUserAge = document.getElementById("edit-user-age");
var button = document.getElementById("edit-send-button");


var deleteUser = function(e) {
  var userId = window.event.target.getAttribute("user-id");

  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url + "/" + userId, true);
  xhr.onload = function() {
    // var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("Success");
      location.reload();
    } else {
      console.error("fail");
    }
  };
  xhr.send(null);
};

var addUser = function() {
  // Update a user
  var newUser = {};
  newUser.name = document.getElementById("new-user-name").value;
  newUser.surname = document.getElementById("new-user-surname").value;
  newUser.email = document.getElementById("new-user-email").value;
  newUser.age = document.getElementById("new-user-age").value;
  var json = JSON.stringify(newUser);

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  // xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function() {
    // var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("success");
      location.reload();
    } else {
      console.error("fail");
    }
  };
  console.log(newUser);
  xhr.send(json);
};

var editUser = function(e) {
  var userId = window.event.target.getAttribute("user-id");
  var button = document.getElementById("edit-send-button");
  var user = document.querySelectorAll("[user-id="+CSS.escape(userId)+"]");

  var userName = user[0].children[0].innerText;
  var userSurname = user[0].children[1].innerText;
  var userEmail = user[0].children[2].innerText;
  var userAge = user[0].children[3].innerText;

  editedUserName.value = userName;
  editedUserSurname.value = userSurname;
  editedUserEmail.value = userEmail;
  editedUserAge.value = userAge;

  button.setAttribute("user-id", userId)
};

var sendEditedUser = function(e) {
  
  var editedUser = {};
  var userId = button.getAttribute("user-id");  

  editedUser.name = editedUserName.value;
  editedUser.surname = editedUserSurname.value;
  editedUser.email = editedUserEmail.value;
  editedUser.age = editedUserAge.value;
  editedUser.id = userId;


  var json = JSON.stringify(editedUser);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url + "/", true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function() {
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("success");
      location.reload();
    } else {
      console.error(users);
    }
  };
  xhr.send(json);
};
