var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        code: 200,
        version: "1.0.0",
        msg: "Server is working",
        link: {
            square: ["/", "/post", "/get"],
            friend: ["/:nickname"],
            account: ["/sign", "/login", "/:nickname"]
        }
    })
});

module.exports = router;