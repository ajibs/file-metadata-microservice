'use strict';

var express = require('express');
var app = express();

// for file uplaods
var multer = require('multer');
var upload = multer();


// define static file paths
app.use( express.static( __dirname + '/views' ) );


// Home Page
app.get('/', function (req, res){
	res.sendFile('index.html');
});


// get file size
app.post('/get-size', upload.single('userFile'), function (req, res){
	if(req.file){
		let result = {};
		result.size = req.file.size + ' bytes';
		res.json(result);
	} else {
		res.end('File not uploaded');
	}
});


// set port
var port = process.env.PORT || 5000;


// start web server
app.listen( port, function (){
	console.log('Node app is running on port ', port);
});