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

app.use(express.static(path.resolve(__dirname + '/build')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://sleepy-earth-19112.herokuapp.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var apiDomain = 'https://min-api.cryptocompare.com';

app.get('/descr', parser, (req, res) => {
    var info, info1;
    var curr = 'USD';

    superagent.get(apiDomain+'/data/top/totalvol')
    .query({
        limit:15,
        tsym: curr
    })
    .end((err,result) => {
        console.log(result.body.Data);
        var arr = result.body.Data;
        var obj = arr.reduce(function(acc, cur, i) {
            acc[i] = cur;
            return acc;
        }, {});
        res.send(obj);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(PORT, (err) => {
    if(err) console.info("Error did due to starting", err);
    console.log("Server started at %s", PORT);
});