var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var superagent = require('superagent');
var cors = require('cors');

var PORT = process.env.port || 3001;

var app = express();

app.use(cors());

app.use(bodyParser());
var parser = bodyParser.json({type: 'application/json'});

app.use('/', express.static(path.resolve(__dirname + '/build')));

var apiDomain = 'https://min-api.cryptocompare.com';

app.get('/descr', parser,(req, res) => {
    var info;
    var currency = req.body.curr;
    var fromSymb = 'BTC,ETH,EOS,BCH,XRP,TRX,LTC,ADA,IOT,ETC';
    var curr = 'USD';
    superagent.get(apiDomain+'/data/pricemultifull')
    .query({fsyms: fromSymb, tsyms: curr})
    .end((err, result) => {
        info = result.body;
        res.send(info);
    });
});

app.listen(PORT, (err) => {
    if(err) console.info("Error did due to starting", err);
    console.log("Server started at %s", PORT);
});