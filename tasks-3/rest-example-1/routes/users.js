var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  fs.readFile(__dirname + '/../models/users-list.js', 'utf-8', (err, data) => {
    if (err) throw err;
  
    var userList = JSON.parse(data);
    res.render('users', { users: userList });
  });
});

module.exports = router;
