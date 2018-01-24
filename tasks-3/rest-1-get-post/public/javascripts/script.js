var editedUserName = document.getElementById("edit-user-name");
var editedUserSurname = document.getElementById("edit-user-surname");
var editedUserEmail = document.getElementById("edit-user-email");
var editedUserAge = document.getElementById("edit-user-age");
var editedUserId = document.getElementById("edit-user-id");

var editUser = function(e) {
  var userId = window.event.target.getAttribute("user-id");
  // var button = document.getElementById("edit-send-button");
  var user = document.querySelectorAll("[user-id="+CSS.escape(userId)+"]");

  var userName = user[0].children[0].innerText;
  var userSurname = user[0].children[1].innerText;
  var userEmail = user[0].children[2].innerText;
  var userAge = user[0].children[3].innerText;

  editedUserName.value = userName;
  editedUserSurname.value = userSurname;
  editedUserEmail.value = userEmail;
  editedUserAge.value = userAge;
  editedUserId.value = userId;

  // button.setAttribute("user-id", userId)
};