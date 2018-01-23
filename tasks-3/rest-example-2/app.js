const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const methodOverride = require('method-override');

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
app.use(bodyParser.urlencoded())


app.use(methodOverride(options))
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     // look in urlencoded POST bodies and delete it
//     var method = req.body._method
//     delete req.body._method
//     return method
//   }
// }))
// define the about route
// app.use(methodOverride('_method', (req,res) => {
//   req.send("holla");
// }))  
app.get('/users', (req,res)=>{
  res.render('users', { users: userList });
});
// app.delete('/users/:id', (req, res) => {
// app.use(methodOverride('_method=DELETE'))
// app.delete('/users/:id', (req, res) => {
  
//   console.log("success");
//   res.render('users', { users: userList });

// })

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

