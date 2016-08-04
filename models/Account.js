var mongoose = require('mongoose'),
    config = require('../config'),
    Schema = mongoose.Schema;

//检查数据库连接情况
mongoose.connect(config.db, function (err) {
    if (err) {
        console.log(err.message);
        process.exit(1);
    }
});

//创建Account的Model
var AccountSchema = new Schema({
    avatar: {type: String},
    nickname: {type: String},
    name: {type: String},
    phone: {type: String},
    email: {type: String},
    school: {type: String},
    password: {type: String},
    create_time: {type: Date}
});


var AccountModel = mongoose.model('Account', AccountSchema);

var Account = {
    newAccount: function (user, callback) {
        var accountEntity = new AccountModel(user);
        accountEntity.save(function (err) {
            callback(err);
        });
    },
    loginAccount: function (email, password, callback) {
        AccountModel.findOne({'email':email},function (err, doc) {
            callback(err, doc);
        });
    },
    showAccount: function (nickname, callback) {
        AccountModel.findOne({'nickname':nickname}, function (err, doc) {
            callback(err, doc);
        })
    }
};

module.exports = Account;