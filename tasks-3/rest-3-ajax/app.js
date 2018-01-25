const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Our modal list
 */
const userList = require('./models/users-list');

/**
 * Generator to assign unique id for new users
 */
const idGenerator = () => {
  return '_' + Math.random().toString(36).substr(2, 9);  
}

/**
 * Checks if users have id's and assigns if not 
 * @param {array} json - array of objects needed to check
 */
const idAssigner = (json) => {
  for (let i = 0; i < json.length; i++){
    if (!Object.prototype.hasOwnProperty.call(json, 'id')){
      let id = idGenerator();
      json[i]["id"] = id;
    } 
  }
}

/**
 * Finds and removes user from list
 * @param {array} array - array to check
 * @param {string} property - which property to find
 * @param {string} value - seached id
 */
const findAndRemove = (array, property, value) => {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
}

/**
 * Finds and removes user from list and inserts new istead
 * @param {array} array - array to check
 * @param {string} property - which property to find
 * @param {string} value - seached id
 * @param {object} newValue - object to replace the previous
 */
const findAndUpdate = (array, property, value, newValue) => {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1, newValue);
    }    
  });
}

/**
 * Home page route
 */
app.get('/', (req, res) => {
  res.render('index', { text: 'This page is empty. Go to "/users" page please.' });
})

/**
 * Users page route
 */
app.get('/users', (req, res) => {
  idAssigner(userList);
  res.render('users', { users: userList });
})

/**
 * Adding new user
 */
app.post('/users', (req, res) => {
  
  let newUser = req.body;
  userList.push(newUser);
  idAssigner(userList);
  res.send(userList);
  
});

/**
 * Deleting user
 */
app.delete('/users/:id', (req, res) => {

  let objectToEdit = req.params;
  objectToEdit = '' + objectToEdit.id;
  findAndRemove(userList, 'id', objectToEdit);
  res.send(userList);
})

/**
 * Editing user
 */
app.put('/users', (req, res) => {

  let objectToEdit = req.body;
  let id = objectToEdit.id;
  findAndUpdate(userList, 'id', id, objectToEdit);
  res.send(userList);
  
})

/**
 * View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/** 
 * Favicon
 */
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error handler
 */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

