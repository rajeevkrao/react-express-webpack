'use strict';

var PORT 		= process.env.PORT || 5000
var express 	= require("express");
var path		= require('path');
var bodyParser  = require('body-parser');
var app     	= express();

require('dotenv').config()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public' ));

//for normal page
app.get('/about',function(request, response){
	response.sendFile(path.join(__dirname+'/views/about.html'));
});

//for react
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/views/index.html')); 
});

var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT);  
});




