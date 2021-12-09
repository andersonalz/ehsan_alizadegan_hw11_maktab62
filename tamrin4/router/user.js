const express = require('express');
const user = express.Router()
var bodyParser = require('body-parser')
const path = require ('path')
const users = require (path.join(__dirname , './users.json'))

user.post('/getUser' , function(req, res) {
   let username = req.body.username;
   
        if (username ==='username') {
               res.send('ok')
        } else { 
               res.send('not match username')
        }
   res.sendFile(path.join(__dirname , './users.json'))
})


module.exports = user


