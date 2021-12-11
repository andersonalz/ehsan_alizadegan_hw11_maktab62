const express = require("express");
const router = express.Router();
const path = require("path");

const pages = {
   "1":path.join(__dirname, '/index1.html'),
   "2":path.join(__dirname, '/index2.html'),
   "3":path.join(__dirname, '/index3.html'),
   "4":path.join(__dirname, '/index4.html'),
   "5":path.join(__dirname, '/index5.html')
}


router.get("/index:id", function(req, res){
 const params = req.params.id
   res.sendFile( pages [`${params}`])
})


module.exports = router;