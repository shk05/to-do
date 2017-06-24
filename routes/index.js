var express = require('express');
var router = express.Router();
var User = require("../models/user");
var Task = require("../models/task");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//task jade load

router.get('/task', function(req, res, next) {
  res.render('partials/task', { title: 'tasks' });
});

//tasks
router.post('/index/task', function(req, res, next) {
  console.log(req.body);

  var newTask = new Task(req.body);

  //Create task
  newTask.save(function(err,user){
    if(err){
      res.status(400).json(err);
    }else{
      res.status(200).json({message : "Task Added"});
    }
  });

});

//REGISTRATION jade load

router.get('/register', function(req, res, next) {
  res.render('partials/register', { title: 'Register' });
});


//REGISTRATION FORM

router.post('/index/register', function(req, res, next) {
  console.log(req.body);

  var newUser = new User(req.body);

  //Create user
  newUser.save(function(err,user){
    if(err){
      res.status(400).json(err);
    }else{
      res.status(200).json({message : "User successfully saved"});
    }
  });

});


module.exports = router;


