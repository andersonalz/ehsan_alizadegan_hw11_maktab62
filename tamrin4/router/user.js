const express = require('express');
const user = express.Router()
var bodyParser = require('body-parser')
const path = require ('path')
const users = require (path.join(__dirname , './users.json'))

// user.get('/getAllUsers', function (req, res) {
//        res.send(users)
// })

user.post('/getUser',  (req, res) => {
       const finduser = users.find((user) => { user.username === req.bady.username })
       if (finduser === undefined) {
             res.send('not found') 
       } else {
              res.send(finduser)
       }
})


module.exports = user


