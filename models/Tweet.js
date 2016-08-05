var mongoose = require('mongoose'),
    config = require('../config'),
    Schema = mongoose.Schema;

var db = mongoose.createConnection(config.db);

var TweetSchema = new Schema({
    userId: {type: String},
    createTime: {type: Date},
    content: {type: String}
});

var TweetModel = db.model('Tweet', TweetSchema);

var Tweet = {
    newTweet: function (userId, content, callback) {
        var data = {
            userId: userId,
            content: content,
            createTime: new Date()
        };
        console.log(data.createTime);
        var tweetEntity = new TweetModel(data);
        tweetEntity.save(function (err) {
            callback(err);
        })
    },
    findTweet: function (index, callback) {
        TweetModel.find({}, function (err, docs) {
            callback(err, docs)
        }).skip(index*5).limit(5);
    }
};

module.exports = Tweet;
