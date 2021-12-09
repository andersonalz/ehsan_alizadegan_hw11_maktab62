const express = require('express');
const page = express.Router()
const path = require('path')




page.get('/index1', function(req, res){
   res.sendFile(path.join(__dirname , './index1.html'))
})
page.get('/index2', function(req, res){
   res.sendFile(path.join(__dirname , './index2.html'))
})
page.get('/index3', function(req, res){
   res.sendFile(path.join(__dirname , './index3.html'))
})
page.get('/index4', function(req, res){
   res.sendFile(path.join(__dirname , './index4.html'))
})
page.get('/index5', function(req, res){
   res.sendFile(path.join(__dirname , './index5.html'))
})



exports.module = page