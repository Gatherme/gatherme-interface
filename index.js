
const fs = require('fs');
const soap = require(`soap`);



const soapServer = require('./soap-server/index')
const ss_2a = require('./soap-server/service')


const xml = fs.readFileSync('./soap-server/ss_2a_service.wsdl', 'utf8');
//create an express server and pass it to a soap server



soapServer.listen(3030, function(){
    soap.listen(soapServer, '/ss_2a', ss_2a, xml, function(){
        console.log("servidor corriendo")
    })
})
