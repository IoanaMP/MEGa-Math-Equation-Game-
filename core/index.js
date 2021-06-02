//export informatiile din fisierele server si router
const { createServer } = require('./server');
const { Router } = require('./router');

module.exports = {
  createServer,
  Router
};