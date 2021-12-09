const express = require('express');
const app = express();
const pages = require('./router/pages');


app.use('/pages' , pages)


app.listen(5000)