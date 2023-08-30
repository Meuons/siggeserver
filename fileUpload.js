
const { ImgurClient } = require('imgur');
const {createReadStream, createWriteStream} = require("fs");
const client = new ImgurClient({clientId: 'b4ba5dfacc20e40'});
const axios = require('axios');
const request = require('request');
const fs = require('fs')
exports.downloadImage = async (uri, callback) => {

    try {
      const response = await axios.get(uri, { responseType: 'arraybuffer' });


      let randomName = (Math.random() + 1).toString(36).substring(2);
      await fs.writeFileSync('./images/' + randomName +'.jpeg', response.data);
      const imagePath = './images/' + randomName +'.jpeg'


    const uploadResponse = await client.upload({
        image: createReadStream(imagePath),
        type: 'stream',
    });
    callback(uploadResponse.data);

 

      
    } catch (error) {
      console.error('Error downloading image:', error.message);
    }
  }


  
const upload= async () => {


}