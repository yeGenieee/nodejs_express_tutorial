var express = require('express');
var app = express();

app.use(express.static('public'));

//router - controller

app.get('/', function(req,res){
  res.send('Hello home page');
});

app.get('/login', function(req,res){ //get은 router
  res.send('Login please');
});

app.get('/route', function(req,res){
  res.send('Router, <img src="/route.png">')
});

app.listen(3000, function() {
  console.log('Connected 3000 port!');
});
