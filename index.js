
const fs = require('fs');
const soap = require(`soap`);
const axios = require('axios')


const soapServer = require('./soap-server/index')
const ss_2a = require('./soap-server/service')


const xml = fs.readFileSync('./soap-server/ss_2a_service.wsdl', 'utf8');
//create an express server and pass it to a soap server

async function data (){
    let res = await axios.get("http://172.17.0.1:" + "3000/gatherme-users-ms" + "/user-username/" + "jssalamancag")
    console.log(res.data[0]['likes']);
}

soapServer.listen(3030, function(){
    soap.listen(soapServer, '/ss_2a', ss_2a, xml, function(){
        data();
        console.log("servidor corriendo")
    })
})
