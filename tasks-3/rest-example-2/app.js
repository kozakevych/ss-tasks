const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const routes = require('./routes/routes');

const app = express();

const fs = require('fs');

let userList;
const userFinder = () => {
  fs.readFile(__dirname + '/models/users-list.js', 'utf-8', (err, data) => {
    if (err) throw err;
    userList = JSON.parse(data);
  });
}
userFinder();

// define the home page route
app.get('/', (req, res) => {
  res.render('index', { title: 'This is home page' });

})

// define the about route
app.get('/users', (req, res) => {
  
  let objectToEdit = Object.keys(req.query);
  // delete userList.objectToEdit;
  console.log(objectToEdit);
  findAndRemove(userList, 'id', objectToEdit);
  console.log(userList);
  res.render('users', { users: userList });
  // req.param.variable_name
// console.log("req.param.id", Object.keys(req.query));

})
function findAndRemove(array, property, value) {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
  console.log("wii")
}
//Checks countries.result for an object with a property of 'id' whose value is 'AF'
//Then removes it ;p
// findAndRemove(countries.results, 'id', 'AF');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

