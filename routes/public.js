var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.json({
        code: "ok",
        version: "1.0.0",
        links: {
            pagesGet: '/get/1',
            pagePost: '/post'
        }
    })
});


//Ask for newest public
router.get('/get/:page', function(req, res, next) {
    var page = req.params.page; //The public page
});

//Add new post
router.post('/post', function(req, res, next) {

});

module.exports = router;