var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/register', function(req, res){
    name = req.body.email
    res.send(name)
});

app.listen(3000, function(){
    console.log('Example');
});