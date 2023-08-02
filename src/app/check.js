var mongoose = require('mongoose');
var User = require("../models/userModels");

var db = mongoose.createConnection('localhost', 'event-db');
db.on('error', console.error.bind(console, 'connection error:'));
var a1= db.once('open',function(){
  User.find({},{},function (err, users) {
    mongoose.connection.close();
    console.log("Username supplied"+username);
    //doSomethingHere 
  })
});