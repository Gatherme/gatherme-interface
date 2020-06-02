const soap = require('soap');

let host = 'localhost';
let port = 8001;
let path = 'getUserById'

let url =`http://${host}:${port}/${path}?wsdl`

async function getUserById(id){
    let args ={id: id};

    const client = await soap.createClientAsync(url);

    let getUserByIdSoap = (args) => {
        return new Promise(resolve => {
            client.getUserById(args, (err, result) => { resolve(result)});
        });
    }

    let result =  await getUserByIdSoap(args);
    return result;

}

module.exports = {getUserById}