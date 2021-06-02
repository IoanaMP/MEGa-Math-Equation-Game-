const mongoose = require('mongoose');

const config = require('./config');
const db = require('./models');

// const { modifyPrimitives } = require('./utilities');
const { createServer, Router } = require('./core');

// modifyPrimitives();
global.dir = __dirname;
//routing
const routes = [
  require('./controllers/routing'),
  require('./controllers/auth'),
  require('./controllers/users'),
];
//apelez controllere pentru a le adauga in memorie
// const router = new Router();
// for (const route of routes) {
//   if (typeof route === 'function') {
//     route(router);
//   }
// }
//conexiune baze de date
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).finally(() => console.log('Connected to database'));
//creare server
createServer(router, db);
