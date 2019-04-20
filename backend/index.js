var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://freecode:freecode@cluster0-gryzz.azure.mongodb.net/freecode?retryWrites=true';
const mongo = require('mongodb').MongoClient;


app.use(express.static('../public'));
app.use(express.urlencoded());
app.use(express.json());
app.set('public', path.join('../public/'));


//set up mongo data base
mongo.connect(mongoDB, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



//serve home page
app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

//get register form data
app.post('/register.html', function(req, res){
    name = req.body.email
    res.send(name)
});

//listen on server port 3000
app.listen(3000, function(){
    console.log('Example');
});