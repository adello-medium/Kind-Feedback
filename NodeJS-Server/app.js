const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path')

//setup
let app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
var counter = 0;


let requestCurrentlyProcessed = true;
let lock = false;
let requested = false;

//start server
app.listen(8080);
console.log("Server started. Listening on 8080");





//home page
app.get('/', function(req, res) {
  res.render("questionaire");
  res.end();
});
