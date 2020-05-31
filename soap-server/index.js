const soap = require(`soap`);
const express = require(`express`);


//Sever Soap
let soap_server = express();
//soap_server.use(require(`body-parser`).raw({type: function(){return true;}, limit: '5mb'}));

module.exports = soap_server;