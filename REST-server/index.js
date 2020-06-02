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

router.get('/SOAP-consume',client.getUserById)

app.use(router)

module.exports=app
