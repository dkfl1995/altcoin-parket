var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var superagent = require('superagent-promise')(require('superagent'), Promise);
var cors = require('cors');

var PORT = process.env.port || 3001;

var app = express();

app.use(cors());

app.use(bodyParser());
var parser = bodyParser.json({type: 'application/json'});

app.use('/', express.static(path.resolve(__dirname + '/build')));

var apiDomain = 'https://min-api.cryptocompare.com';

app.get('/descr', parser, (req, res) => {
    var info, info1;
    // var fromSymb = 'BTC,ETH,EOS,BCH,XRP,TRX,LTC,ADA,IOT,ETC';
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
    // var x = async => {
    //     return function(){
    //             var fx = await => superagent.get(apiDomain+'/data/pricemultifull')
    //             .query({fsyms: fromSymb, tsyms: curr})
    //             .end((err, result) => {
    //                 info = Object.assign({}, info, result);
    //                 console.log(info);
    //                 return info;
    //             });
    //             var s = await => superagent.get(apiDomain+'/data/coinlist')
    //             .end((err, result) => {
    //                 info = Object.assign({}, info, result);
    //                 console.log(info);
    //                 return info;
    //             });
    //     };
    // };
    // res.send([foo, bar]);


app.listen(PORT, (err) => {
    if(err) console.info("Error did due to starting", err);
    console.log("Server started at %s", PORT);
});