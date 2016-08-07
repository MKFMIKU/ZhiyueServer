var mongoose = require('mongoose'),
    config = require('../config'),
    Schema = mongoose.Schema;

var Account = require('../models/Account');

var db = mongoose.createConnection(config.db);

var TweetSchema = new Schema({
    nickname: {type: String},
    createTime: {type: Date},
    content: {type: String},
    avatar: {type: String}
});

var TweetModel = db.model('Tweet', TweetSchema);


var Tweet = {
    newTweet: function (nickname, content, callback) {
        var avatar = "";
        Account.showAccount(nickname, function (err, doc) {
            if (err)
                content.log(err);
            else {
                avatar = doc.avatar;
                var data = {
                    nickname: nickname,
                    content: content,
                    createTime: new Date(),
                    avatar: avatar
                };
                var tweetEntity = new TweetModel(data);
                tweetEntity.save(function (err) {
                    callback(err);
                });
            }
        });
    },
    findTweet: function (callback) {
        TweetModel.find({}, function (err, docs) {
            callback(err, docs)
        });
    }
};

module.exports = Tweet;
