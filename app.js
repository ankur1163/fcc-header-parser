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
//var ter = JSON.stringify(req.headers);
var mer = req.headers["user-agent"].split('(')[1].split(')')[0];
var der = req.headers["accept-language"];
console.log("this is co ",req.headers['user-agent'].split('('));

var ger = ipInfo.clientIp;
var ber = mer + der+ger;
var result = {ip:ger,useragent:mer,language:der};


res.send(result);



console.log(JSON.stringify(req.headers));


   console.log("the real ip is "+JSON.stringify(ipInfo));

});
