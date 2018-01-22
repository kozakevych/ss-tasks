
var url = "http://127.0.0.1:3000/users";

var deleteUser = function (e){

  var userId = window.event.target.getAttribute('user-id');
  
  var xhr = new XMLHttpRequest();
  xhr.open("DELETE", url+"/"+userId, true);
  xhr.onload = function () {
    // var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("Success");
      location.reload();
    } else {
      console.error("fail");
    }
  }
  xhr.send(null);

}

var addUser = function () {

  // Update a user
  var newUser = {};
  newUser.name = document.getElementById("new-user-name").value;
  newUser.surname  = document.getElementById("new-user-surname").value;
  newUser.email  = document.getElementById("new-user-email").value;
  newUser.age  = document.getElementById("new-user-age").value;
  var json = JSON.stringify(newUser);
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  // xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
    // var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
      console.log("success");
    } else {
      console.error("fail");
    }
  }
  console.log(newUser);
  xhr.send(json);
}
