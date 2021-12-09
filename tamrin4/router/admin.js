const express = require('express');
const admin = express.Router()
const path = require ('path')

admin.get('/getAllUsers' , function(req, res) {
   res.sendFile(path.join(__dirname , './users.json'))
})


module.exports = admin




