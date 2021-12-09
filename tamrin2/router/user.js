const express = require('express');
const user = express.Router();
const path = require('path');


user.get('/', (req, res) => {
   res.sendFile(path.join(__dirname ,'../views/html.html'))
   
})

module.exports = user
