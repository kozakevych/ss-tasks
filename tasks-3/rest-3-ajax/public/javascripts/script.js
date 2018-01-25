/**
 * Modal window trigger
 */
$(document).ready(function(){
  $('.modal').modal();
});

const url = "http://crud-users-ajax.herokuapp.com/users";

/** 
 * Variables of edit user modal window form
 */
const editedUserName = $("#edit-user-name");
const editedUserSurname = $("#edit-user-surname");
const editedUserEmail = $("#edit-user-email");
const editedUserAge = $("#edit-user-age");
const button = $("#edit-send-button");

/**
 *  Delete user via DELETE method
 */
const deleteUser = function(e) {
  let userId = window.event.target.getAttribute("user-id");

  $.ajax({
    method: "DELETE",
    url: url + "/" + userId
  })
  .done(function(data) {
    $("table").html(usersClientTemplate(users=data))  
  });
  
};

/** 
 * Add new user via POST method
 */
const addUser = function() {
  
  let newUser = {};
  newUser.name = $("#new-user-name").val();
  newUser.surname = $("#new-user-surname").val();
  newUser.email = $("#new-user-email").val();
  newUser.age = $("#new-user-age").val();
  
  $.ajax({
    method: "POST",
    url: url,
    data: newUser
  })
  .done(function(data) {
    $("table").html(usersClientTemplate(users=data))  
  });
  
};

/**
 * Finds which user needs to be edited and provides his current info in modal window
 */
const editUser = function(e) {
  
  let userId = window.event.target.getAttribute("user-id");
  
  let user = $("[user-id="+userId+"]");
  
  let userName = user[0].children[0].innerText;
  let userSurname = user[0].children[1].innerText;
  let userEmail = user[0].children[2].innerText;
  let userAge = user[0].children[3].innerText;
  
  editedUserName.val(userName);
  editedUserSurname.val(userSurname);
  editedUserEmail.val(userEmail);
  editedUserAge.val(userAge);
  
  button.attr("user-id", userId);
};

/** 
 * Edit user via PUT method
 */
const sendEditedUser = function(e) {
  
  let editedUser = {};
  let userId = button.attr("user-id");  
  
  editedUser.name = editedUserName.val();
  editedUser.surname = editedUserSurname.val();
  editedUser.email = editedUserEmail.val();
  editedUser.age = editedUserAge.val();
  editedUser.id = userId;
  
  $.ajax({
    method: "PUT",
    url: url,
    data: editedUser
  })
  .done(function(data) {
    $("table").html(usersClientTemplate(users=data));
  });

};
