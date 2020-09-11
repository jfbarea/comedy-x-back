const get = require('./get');
const post = require('./post');
const list = require('./list');
const select = require('./select');
const reset = require('./reset');

const BASE_URL = '/question';

module.exports = [
  { method: 'get', url: BASE_URL, handler: get },
  { method: 'get', url: `${BASE_URL}/all`, handler: list },
  { method: 'post', url: `${BASE_URL}/vote`, handler: post },
  { method: 'post', url: `${BASE_URL}/reset`, handler: reset },
  { method: 'put', url: `${BASE_URL}/select`, handler: select },
]