const express = require ('express')
const admin = require ('./router/admin')
const user = require ('./router/user')
const app = express()
const path = require ('path')
const port = 5000

app.use(express.json)
app.use(express.urlencoded({ extended : false}))


app.use('/admin' , admin)
app.use('/user' , user)



app.listen(port , () => {console.log(`${port}` + 'is running');})
