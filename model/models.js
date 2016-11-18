var mongoose = require('mongoose'),
    config = require('../config'),
    Schema = mongoose.Schema;

var db = mongoose.createConnection(config.db);

//创建Account的Model
var AccountSchema = new Schema({
    avatar: {type: String},         //It will be a url in cdn.
    nickname: {type: String},
    name: {type: String},
    phone: {type: String},
    email: {type: String},
    password: {type: String},
    create_time: {type: Date, default: Date.now},
    information: {
        school: String,
        major: String,
        dreamSchool: String,
        dreamMajor: String,
        liveCity: String
    },
    social: {
        qq: String,
        wechat: String,
        weibo: String
    }
});


//创建Tweet的Model
var TweetSchema = new Schema({
    content: String,
    loves: [String],
    creater: String,
    comments: [String]
});


var AccountModel = db.model('Account', AccountSchema);
var TweetModel = db.model('Tweet', TweetSchema);

module.exports={
    AccountModel: AccountModel,
    TweetModel: TweetModel
};