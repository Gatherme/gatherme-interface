const soap = require('soap');

let host = 'localhost';
let port = 3030;
let path = ''

let url =`http://${host}:${port}/${path}?wsdl`

async function nameFunction(id, type){
    let args ={id: id, type: type};

    const client = await soap.createClientAsync(url);

    let nameFunctionSoap = (args) => {
        return new Promise(resolve => {
            client.nameFunction(args, (err, result) => { resolve(result)});
        });
    }

    let result =  await nameFunctionSoap(args);

    return result;

}

module.exports = {nameFunction}