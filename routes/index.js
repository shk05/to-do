var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//REGISTRATION

router.get('/register', function(req, res, next) {
  res.render('partials/register', { title: 'Register' });
});


module.exports = router;


