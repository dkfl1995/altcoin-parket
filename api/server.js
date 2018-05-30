var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var bodyparser = require('body-parser');
var superagent = require('superagent');

var PORT = process.env.port || 3001;

var app = express();

app.use(bodyparser());

app.use(router);

app.use('/', express.static(path.resolve(__dirname + '/build')));

router.get('/description', bodyparser.json(), (req, res) => {
    // var currency = req.body.curr;

    var descr = superagent.get('https://min-api.cryptocompare.com/data/price?fsym=%s&tsyms=%s',fromSymb ,toSymb).pipe(res).end(res);
    res.send(descr);
});

var server = http.createServer().listen(PORT, (err) => {
    if(err) console.info("Error did due to starting", err);
    console.log("Server started at %s", PORT);
});