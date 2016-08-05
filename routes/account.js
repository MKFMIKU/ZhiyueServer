var express = require('express');
var router = express.Router();
var avatarRandom = require('../libs/avatarRandom');

var Account = require('../models/Account');
var User = require('../models/User');

//Use fo sign msg = 0 Stand Sign lost, else stand sin ok!
router.post('/sign', function (req, res) {
    var user = User;
    user.avatar = avatarRandom();
    user.nickname = req.body.nickname;
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.school = req.body.school;
    user.password = req.body.password;
    user.create_time = new Date();

    Account.newAccount(user, function (err) {
        var ans = 1;
        if (err) {
            console.log(err);
            ans = 0;
        }
        res.json({
            code: 200,
            version: "1.0.0",
            msg: ans?"ok":"wrong"
        })
    })
});

//Use for log in
router.post('/login', function (req, res) {
    var email = req.body.email,
        password = req.body.password;
    Account.loginAccount(email, password, function (err, doc) {
        var ans = 0;
        if (err)
            console.log(err);
        else if (!doc)
            res.json({
                code: 403,
                version: "1.0.0",
                msg: "No user"
            });
        else {
            if (doc.password == password) ans = 1;
            res.json({
                code: ans ? 200 : 403,
                version: "1.0.0",
                msg: ans ? "ok" : "Wrong Password",
                result: ans? doc: null
            })
        }
    });
});

//Ask for avatar and user profile
router.get('/:nickname', function (req, res) {
    var nickname = req.params.nickname;
    Account.showAccount(nickname, function (err, doc) {
        if (err)
            console.log(err);
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
                msg: "ok",
                result: {
                    avatar: doc.avatar,
                    nickname: doc.nickname,
                    name: doc.name,
                    school: doc.school
                }
            });
    })
});

module.exports = router;