var TweetModel = require('./models').TweetModel;

var Tweet = {
    newTweet: function (_id, content, callback) {
        var tweetEntity = new TweetModel({
            creater: _id,
            content: content,
            love: 0,
            comments: []
        });
        tweetEntity.save(function (err) {
            callback(err);
        })
    },
    findTweet: function (num, callback) {
        TweetModel.find().skip(num*10).limit(10).exec(function (err, docs) {
            callback(err, docs);
        });
    },
    loveTweet: function (_id, user, callback) {
        TweetModel.findById(_id,function (err, doc) {
            if(err) callback(err);
            else if(user in doc.loves) callback("Love existed");
            else{
                doc.loves.push(user);
                doc.save(function (err) {
                    if(err) callback(err);
                });
            }
        })
    }
};

module.exports = Tweet;
