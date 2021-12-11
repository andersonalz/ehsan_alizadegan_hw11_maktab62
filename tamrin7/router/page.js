const express = require('express');
const pages = express.Router()
const path = require('path')
const users = require('../userlist/users.json')
const age = new Number(3)
const age1 = 3
console.log(typeof age);
console.log(typeof age1)


pages.post('/register' , (req, res) => {
   const finder = users.find((user) => {
      console.log(user.username , req.body.username , user.username === req.body.username);
      console.log(user.password , req.body.password , user.password === req.body.password);
      return (user.username === req.body.username && user.password + "" === req.body.password) })
console.log(finder);
   if(!finder){
     res.send('donot have any this acount')
   }else{
      res.send('login sucsses')
   }
   console.log(req.body)
})

module.exports = pages