var express = require('express');
var app = express();
var path = require('path');
var mongoDB = 'mongodb+srv://freecode:freecode@cluster0-gryzz.azure.mongodb.net/freecode?retryWrites=true';
const mongo = require('mongodb').MongoClient;


app.use(express.static('../public'));
app.use(express.urlencoded());
app.use(express.json());
app.set('public', path.join('../public/'));

//serve home page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

//get register form data
app.post('/register.html', function(req, res) {
    var names = req.body.name;
    var emails = req.body.email;
    var passwords = req.body.password;
    //set up mongo data base
    mongo.connect(mongoDB, (err, client) => {
        if(err){
            console.error(err);
            return;
        }
        var db = client.db('freecode');
        const collection = db.collection('users');
        collection.insertOne({name: names, email: emails, password: passwords}, (err, result) => {
            if(err){
                console.error(err)
            }
            else{
                console.log("added email");
                console.log(emails);
            }
        });
    });

    res.sendFile(path.join(__dirname + "/public/index.html"));
});

//listen on server port 3000
app.listen(3000, function(){
    console.log('Example');
});