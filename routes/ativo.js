'use strict'
var express = require('express');
var bcrypt = require('bcryptjs')
var User = require('../models/user');
var jwt = require('jsonwebtoken');


var router = express.Router();

router.post('/', function (req, res, next) {        
    
});

router.post('/signin',function(req,res,next){
  
});

module.exports = router;
