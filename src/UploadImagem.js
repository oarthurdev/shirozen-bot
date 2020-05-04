const fs =   require('fs'),
      path = require('path'),
      T =    require("./Twit.js")


UploadImageFromScreenshot = images => {
    console.log('Opening an image...');
    
    var image_path = path.join('C:/Users/Usuario/Documents/Black Desert/ScreenShot/2020-04-28_614618011.jpg'),
        b64content = fs.readFileSync(image_path, { encoding: 'base64' });
  
    console.log('Uploading an image...');
  
    T.post('media/upload', { media_data: b64content }, function (err, data, response) {
      if (err){
        console.log('ERROR:');
        console.log(err);
      }
      else{
        console.log('Image uploaded!');
        console.log('Now tweeting it...');
  
        T.post('statuses/update', {
          media_ids: new Array(data.media_id_string)
        },
          function(err, data, response) {
            if (err){
              console.log('ERROR:');
              console.log(err);
            }
            else{
              console.log('Posted an image!');
            }
          }
        );
      }
    });
}