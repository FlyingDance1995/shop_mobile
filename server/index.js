require('dotenv').config();
const express = require('express');
const consola = require('consola');
const bodyParser = require('body-parser');
const { Nuxt, Builder } = require('nuxt');
const http = require('http');

const socket = require('./socket');
const routes = require('./routes');

const app = express();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

// when socket
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

// create-or-update server when socket
const server = http.createServer(app);

// Middlewares
app.use(bodyParser.json());

//  Connect all our routes to our application
routes.pipline(app);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express - when socket
  app.use(nuxt.render);

  // Listen the server when socket
  server.listen(port, host);
}

start().then(() => {
  // Listen the server
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
});
