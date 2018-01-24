// const express = require('express')
// const router = express.Router()
// const fs = require('fs');

// let userList;
// const userFinder = () => {
//   fs.readFile(__dirname + '/../models/users-list.js', 'utf-8', (err, data) => {
//     if (err) throw err;
//     userList = JSON.parse(data);
//   });
// }
// userFinder();

// // define the home page route
// router.get('/', (req, res) => {
//   res.render('index', { title: 'This is home page' });

// })
// // define the about route
// router.get('/users', (req, res) => {
  
//   res.render('users', { users: userList });
// })

// router.get('/users?id1=Delete', (req, res) => {
  
//   console.log('id: ' + req.query.id);
//   userList.pop();
//   res.render('users', { users: userList });

// })


// module.exports = router