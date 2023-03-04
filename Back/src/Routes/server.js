const express = require("express");
const server = express();
const router = require('./index') 
const cors = require('cors')
const morgan = require('morgan')

// MiddleWares
server.use(cors())
server.use(express.json());
server.use(morgan('dev'))

//Routing
server.use('/rickandmorty', router)

module.exports = server