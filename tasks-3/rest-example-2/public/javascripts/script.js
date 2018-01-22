
var deleteUser = function (e){

  var userId = window.event.target.getAttribute('user-id');
  
  var url = "http://127.0.0.1:3000/users";
  
  console.log(url+"/"+userId)
  
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