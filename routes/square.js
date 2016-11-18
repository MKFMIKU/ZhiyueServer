var express = require('express');
var router = express.Router();

var Tweet = require('./Tweet');
var Account = require('./Account');

router.get('/', function (req, res) {
    res.json({
        code: 200,
        version: "1.0.0",
        msg: "ok"
    })
});

router.post('/post', function (req, res) {
    Tweet.newTweet(req.body.userId, req.body.content, function (err) {
        if(err)
            console.log(err);
        else
            res.json({
                code: 200,
                version: "1.0.0",
                msg: "ok"
            });
    });
});

router.get('/get', function (req, res) {
    Tweet.findTweet(function (err, docs) {
        if(err)
            console.log(err);
        else {
            res.json({
                code: 200,
                version: "1.0.0",
                msg: "ok",
                result: docs
            })
        }
    })
});

module.exports = router;