const express = require("express");
const app = express();
const path = require('path')
const port = 5200
const pages = require('./router/pages')

app.use('/' , pages)


app.listen(port, () => {console.log('server is running on port' , `${port}`);})