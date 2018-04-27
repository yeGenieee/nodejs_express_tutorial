// file System이용한 nodejs
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs'); //file system

var app = express();

app.use(bodyParser.urlencoded({extend:false}));
app.locals.pretty = true;

app.set('views','./views_file');
app.set('view_engine', 'jade');

app.listen(3000,function(){
  console.log('Connected port:3000');
});


app.post('/topic', function(req,res){
  var title = req.body.title;
  var description = req.body.description;
  fs.writeFile('data/'+title, description, function(err){
    if(err){
      console.log(err);
        res.status(500).send('Internal Server Error');
    }
    res.send('Success!');
  });
});

app.get('/topic/new', function(req,res) {
  res.render('new');
});
