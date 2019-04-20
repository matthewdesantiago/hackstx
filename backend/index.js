var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('../public'));
app.set('public', path.join('../public/'));

app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post('/register', function(req, res){
    name = req.body.email
    res.send(name)
});

app.listen(3000, function(){
    console.log('Example');
});