const express = require('express')
const app = express()
const path = require('path')
const check = require('./router/page')

app.use(express.static(path.join(__dirname ,"/public")))
app.use(express.urlencoded ({extended : false}))
app.use(express.json())
app.use(check)

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, './view/tamrin4.html'))
})


app.listen(5100 , () => {console.log('server is running port 5500');})