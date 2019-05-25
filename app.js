/*server.js*/
const http = require('http');
var express = require('express');
var app = express();
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

app.get(“/home”,	(req,	res)	=>{
res.sendFile(path.join(__dirname	+	‘/home.html’));
})

app.get(“/about”,	(req,	res)	=>{
res.sendFile(path.join(__dirname	+	‘/about.html’));
})

app.get(“/contact”,	(req,	res)	=>{
res.sendFile(path.join(__dirname	+	‘/contact.html’));
})
