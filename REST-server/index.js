'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app =  express()
const http = require('http')
const server = http.createServer(app)

const client= require('../soap-client/client')


app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

var router = express.Router()

router.get('/SOAP-consume',async(req,res)=>{
    let id = req.body.id
    let result= await client.getUserById(id)
    if(result.user_id){
        console.log(result)
        return res.status(200).send(result)
    }
    console.log("no existe el usuario")  
    return res.status(500).send({message:"no existe el usuario"})
})

app.use(router)

module.exports=app
