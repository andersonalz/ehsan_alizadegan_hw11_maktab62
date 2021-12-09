const express = require('express');
const app = express();
const port = 5000


//////////////////////////////1///////////////////////
app.get('/', (req, res) => { 
   res.send('Welcome')
})

app.listen(port , ()=>{
   console.log('server is running on ' `${port}`);
})