var express = require('express');
var router = express.Router();

var Account = require('../model/Account');
var Tweet = require('../model/Tweet');

//Use fo sign msg = 0 Stand Sign lost, else stand sin ok!
router.post('/sign', function (req, res) {

    Account.newAccount(req.body.account, function (err, user) {
        if(err)
            res.json({
                code: 500,
                version: "1.0.0",
                error: err
            });
        else
            res.json({
                code: 200,
                version: "1.0.0",
                user: user
            });
    })
});

//Use for log in
router.post('/login', function (req, res) {
    var email = req.body.email,
        password = req.body.password;
    Account.loginAccount(email, password, function (err, doc) {
        if(err)
            res.json({
                code: 500,
                version: "1.0.0",
                error: err
            });
        else if (!doc)
            res.json({
                code: 403,
                version: "1.0.0",
                msg: "No user"
            });
        else
            res.json({
                code: 200,
                version: "1.0.0",
                user: doc
            })
    });
});

//Ask for avatar and user profile
router.get('/:email', function (req, res) {
    var email = req.params.email;
    Account.showAccount(email, function (err, doc) {
        if(err)
            res.json({
                code: 500,
                version: "1.0.0",
                error: err
            });
        else if (!doc)
            res.json({
                code: 200,
                version: "1.0.0",
                msg: "No user"
            });
        else
            res.json({
                code: 200,
                version: "1.0.0",
                result: {
                    avatar: doc.avatar,
                    nickname: doc.nickname,
                    name: doc.name,
                    information: doc.information
                }
            });
    })
});

module.exports = router;