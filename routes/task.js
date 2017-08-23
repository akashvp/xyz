var express = require('express');
var router = express.Router();
var mongojs=require('mongojs');
var db=mongojs('localhost:27017/demo',['contact']);

router.get('/task',function(req,res,next){
  db.contact.find(function(err,task){
     if(err){
     	res.send(err)
     }
     res.json(task);
  });
});

module.exports = router;