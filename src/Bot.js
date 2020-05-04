const T = require("./Twit.js");
const axios = require('axios').default
const uploadImagem = require('./UploadImagem.js')


const sleep = time => {
    setTimeout(function(){ 
        UploadImageFromScreenshot() 
    }, time)
}

const Bot = () => {
    console.log("Aguardando chegada de imagens...")

    sleep(3000)
};

module.exports = Bot;