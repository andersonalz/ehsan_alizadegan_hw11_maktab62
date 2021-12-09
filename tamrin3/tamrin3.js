const express = require('express');
const app = express();
const user = require('./router/user')



app.use('/user' , user)
 
////////////////////////////////3///////////////////////////////////////////

app.listen(5000)
