const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const userList = require('./models/users-list');

// let userList;
// const userFinder = () => {
//   fs.readFile(__dirname + '/models/users-list.js', 'utf-8', (err, data) => {
//     if (err) throw err;
//     userList = JSON.parse(data);
//     console.log(1);
//   });
// }
// userFinder();

const idGenerator = () => {
  return '_' + Math.random().toString(36).substr(2, 9);  
}

const idAssigner = (json) => {

  for (let i = 0; i < json.length; i++){
    
    if (!json[i].hasOwnProperty("id")){
      let id = idGenerator();
      json[i]["id"] = id;
      // console.log(json[i]);
    }
    
  }

}

const findAndRemove = (array, property, value) => {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1);
    }    
  });
}

const findAndUpdate = (array, property, value, newValue) => {
  array.forEach(function(result, index) {
    if(result[property] == value) {
      //Remove from array
      array.splice(index, 1, newValue);
    }    
  });
}

// define the home page route
app.get('/', (req, res) => {
  res.render('index', { title: 'This is home page' });
  
})


app.get('/users', (req, res) => {
  
  idAssigner(userList);
  // console.log(userList);
  res.render('users', { users: userList });
  
})

app.post('/users', (req, res) => {
  
  let newUser = req.body;
  userList.push(newUser);
  // idAssigner(userList);
  res.render('users', { users: userList });
  
});


app.delete('/users/:id', (req, res) => {
  
  let objectToEdit = req.params;
  // debugger;
  objectToEdit = '' + objectToEdit.id;
  console.log(objectToEdit);
  findAndRemove(userList, 'id', objectToEdit);
  
  res.render('users', { users: userList })
})


app.put('/users', (req, res) => {
  
  let objectToEdit = req.body;
  let id = objectToEdit.id;
  // debugger;
  // objectToEdit = '' + objectToEdit.id;
  findAndUpdate(userList, 'id', id, objectToEdit);
  console.log(objectToEdit);
  
  res.render('users', { users: userList })
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images/favicon.ico')));
app.use(logger('dev'));

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

