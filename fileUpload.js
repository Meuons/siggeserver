
const { ImgurClient } = require('imgur');
const {createReadStream, createWriteStream} = require("fs");
const client = new ImgurClient({clientId: 'b4ba5dfacc20e40'});
const axios = require('axios');
const request = require('request');
const fs = require('fs')
exports.downloadImage = async (uri, callback) => {

    try {
      const response = await axios.get(uri, { responseType: 'arraybuffer' });

      const type = uri.substring("data:image/".length, uri.indexOf(";base64"))
      console.log(uri)
      let randomName = (Math.random() + 1).toString(36).substring(2);
      await fs.writeFileSync('./images/' + randomName +'.' + type, response.data);
      const imagePath = './images/' + randomName +'.'  + type;


    const uploadResponse = await client.upload({
        image: createReadStream(imagePath),
        type: 'stream',
    });
    callback(uploadResponse.data);
    console.log(uploadResponse.data)
 

      
    } catch (error) {
      console.error('Error downloading image:', error.message);
    }
  }


  
const upload= async () => {


}