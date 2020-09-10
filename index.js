const express = require('express')();
const port = process.env.PORT || 3000;

const services = require('./src/routes');

for (const {method, url, handler} of services) {
  express[method](url, handler);
}

express.listen(port, () => {
  console.log(`Comedy-x-back listening on ${port}`);
});