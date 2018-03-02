var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Alireza Sheikholmolouki | Art Lover, Binaries Fan'
  });
});

module.exports = router;
