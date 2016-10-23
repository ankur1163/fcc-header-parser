"use strict";
var mongo = require("mongodb").MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
var mongoose  = require("mongoose");
var path = require("path");
var moment = require('moment');
 var urlparser = require("@augmt/request-header-parser-microservice");
 var getIP = require('ipware')().get_ip;

var port  =3000;
var app = express();
//app.listen(5000);
app.listen(process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));


//var urlencodedParser = bodyParser.urlencoded({extended:false});

//app.use("/person",checkplease());
/*
app.post("/person",urlencodedParser, function(req,res){
  var localResult = checkplease(req.body.entry);
 res.send("<html><head></head><body><h1>Person: " + localResult + "</h1></body></html>")

});
*/
app.get('/', function (req, res) {
var ipInfo = getIP(req);
var ter = JSON.stringify(req.headers.accept-language);
var ter = JSON.stringify(req.headers.user-agent);
var ger = JSON.stringify(ipInfo.clientIp);
var ber = ter + ger;
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
console.log("amazinf "+ber);
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
res.send(ber);



console.log(JSON.stringify(req.headers));


   console.log("the real ip is "+JSON.stringify(ipInfo));

});
