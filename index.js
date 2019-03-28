const express = require('express');
const helmet = require('helmet');

const db = require('./database/config.js');
//const model = require('./models/model-model.js');

const server = express();

server.use(helmet());
server.use(express.json());