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

const findAndRemove = (array, property, value) => {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
}

// define the home page route
app.get('/', (req, res) => {
  res.render('index', { title: 'This is home page' });

})

// define the about route
app.get('/users', (req, res) => {
  
  
  if (Object.keys(req.query).length == 4) {

    let newUser = req.query;
    console.log(newUser);
    userList.push(newUser);
    console.log("add user");
    // check id

  } else if (Object.keys(req.query).length == 1){

    console.log("delete user");
    let objectToEdit = Object.keys(req.query);
    findAndRemove(userList, 'id', objectToEdit);
  }
  
  res.render('users', { users: userList });

})

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

