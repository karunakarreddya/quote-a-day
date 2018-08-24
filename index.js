var express = require('express');
var app =express();

app.get('/hello', function(req,res){
    res.sendFile(__dirname+ '/index.html');
});
var port =process.env.port || 4000;

var server = app.listen(port, function(req,res){
    console.log('app started');
})