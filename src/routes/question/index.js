const get = require('./get');
const post = require('./post');
const list = require('./list');

const BASE_URL = '/question';

module.exports = [
  { method: 'get', url: BASE_URL, handler: get },
  { method: 'post', url: `${BASE_URL}/vote`, handler: post },
  { method: 'get', url: `${BASE_URL}/all`, handler: list }
]