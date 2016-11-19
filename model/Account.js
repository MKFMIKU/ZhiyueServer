var AccountModel = require('./models').AccountModel;

var Account = {
    newAccount: function (user, callback) {
        console.log(user);
        var accountEntity = new AccountModel(user);
        this.showAccount(user.email, function (err, doc) {
            if(err)
                callback(err);
            else if(doc)
                callback("Account existed");
            else
                accountEntity.save(function (err, doc) {
                    callback(err, doc);
                })
        });
    },
    loginAccount: function (email, password, callback) {
        AccountModel.findOne({'email':email,'password': password},function (err, doc) {
            callback(err, doc);
        });
    },
    showAccount: function (email, callback) {
        AccountModel.findOne({'email': email}, function (err, doc) {
            callback(err, doc);
        })
    }
};

module.exports = Account;