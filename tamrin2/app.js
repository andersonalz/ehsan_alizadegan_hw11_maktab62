const express = require('express');
const app = express();
const user = require('./router/user');
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')))
//////////////////////////////2////////////////////////////////////////////////

app.use('/user' , user)


app.listen(5000)

