if (!process.env.HEROKU) require('dotenv').config();
const express = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

express.use(cors());
express.use(bodyParser.json());

const providers = require('./providers');
const services = require('./routes');

services.forEach(({method, url, handler}) => express[method](url, handler));

const init = async () => {
  Object.values(providers).forEach(p => p.connect());
};

express.listen(port, async () => {
  await init()
  console.log(`Comedy-x-back listening on ${port}`);
});