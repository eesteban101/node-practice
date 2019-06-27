/*server.js*/
var express = require('express');
var path = require('path');
var app = new express();
var port = 3000;

app.get("/",	(req,	res)	=>{
res.sendFile(path.join(__dirname +	"/home.html"));
})

app.get("/about",	(req,	res)	=>{
res.sendFile(path.join(__dirname +	"/about.html"));
})

app.get("/contact",	(req,	res)	=>{
res.sendFile(path.join(__dirname +	"/contact.html"));
})

app.get("/error", (req, res)     =>{
res.sendFile(path.join(__dirname + "/bogos.html"));
})

app.listen(port);
