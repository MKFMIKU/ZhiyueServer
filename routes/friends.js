var express = require('express');
var router = express.Router();

var Account = require('./Account');

router.get('/:nickname', function (req, res) {
    Account.recommnAccount(function (err, docs) {
        if (err)
            console.log(err);
        else {
            var friendList = [];
            for (var i in docs) {
                var friendDoc = {};
                friendDoc.nickname = docs[i].nickname;
                friendDoc.name = docs[i].name;
                friendDoc.school = docs[i].school;
                friendDoc.avatar = docs[i].avatar;

                friendList.push(friendDoc);
            }

            res.json({
                code: 200,
                version: "1.0.0",
                msg: "ok",
                result: friendList
            })
        }
    });
});

module.exports = router;