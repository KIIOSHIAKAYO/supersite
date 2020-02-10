var express = require('express');
var path = require('path');

var app = express();

app.set('port',4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*',function(req,res){
  res.sendFile('pages/index.html',{root:__dirname});
})

module.exports = app;

app.listen(app.get('port'),function(){
  console.log(`Server up and running on port ${app.get('port')}...`);
  
})
