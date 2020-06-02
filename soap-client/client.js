'use strict'
const soap = require('soap');

let host = '172.17.0.1'
let port = 8001;
let path = 'getUserById'

let url =`http://${host}:${port}/${path}?wsdl`

async function getUserById(req,res){

    let args ={
        id:req.body.id
    };

    console.log(`URL : ${url}`)

    soap.createClient(url,(err1,client)=>{
        if(err1){
            console.log(`CONNECTION ERROR : ${err1}`)
            return res.status(500).send({"CONNECTION ERROR": err1})
        }else{

            client.getUserById(args,(err2,result)=>{
                if(err2){
                    console.log(`FUNCTION ERROR : ${err2}`)
                    return res.status(500).send({"FUNCTION ERROR": err2})
                }else{
                    console.log(`RESULT : ${result}`)
                    return res.status(200).send({RESULT: result})
                }
            })
        }
    })

}

module.exports = {getUserById}