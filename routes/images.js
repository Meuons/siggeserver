const multer =  require("multer");
const fileUpload  =  require("../fileUpload");
var express = require("express");
const multiparty = require('multiparty')

var router = express.Router();
const storage = multer.memoryStorage(); // Store the file in memory (as a buffer).
const upload = multer({ dest: 'files/'});

router.post("/upload", async (req, res) => {
   try {
  const form =  new multiparty.Form({uploadDir: './images'})
form.parse(req, async function(err, fields, files){
   if(err) return res.send({error: err.message})

 await fileUpload.downloadImage("" + fields.uri, 
 (response) => {
   console.log('response'+ JSON.stringify(response))
   res.send({
      link: response.link
   })

 })


})
      

     /*  const uri = req.body.data.photo
      fileUpload.downloadImage(uri) */

   } catch (err) {
      console.error(err);
      res.status(500).send("Internal server error");
   }
});

module.exports = router;
