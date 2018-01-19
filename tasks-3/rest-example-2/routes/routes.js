var express = require('express')
var router = express.Router()
var fs = require('fs');

// define the home page route
router.get('/', function (req, res) {
  res.render('index', { title: 'This is home page' });

})
// define the about route
router.get('/users', function (req, res) {
  fs.readFile(__dirname + '/../models/users-list.js', 'utf-8', (err, data) => {
    if (err) throw err;
  
    var userList = JSON.parse(data);
    res.render('users', { users: userList });
  });
})

module.exports = router