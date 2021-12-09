const exports = require ('express');
const user = express.user();

user.get('/read', (req, res) => {
   res.sendFile('read')

})
user.get('/creat', (req, res) => {
      res.sendFile('creat')
   
})
user.gett('/delet', (req, res) => {
   res.sendFile('delet')

})

user.get('/update', (req, res) => {
   res.sendFile('update')

})


module.exports = user