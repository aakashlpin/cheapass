const { parse } = require('url');
const next = require('next');
const mongoose = require('mongoose');
const body = require('body-parser');
const express = require('express');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

const api = require('./backend/api/v1');
const errorHandlers = require('./backend/handlers/errorHandlers');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true,
});
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// import all of our models
require('./backend/models/AmazonLinks').model;
require('./backend/models/FlipkartLinks').model;

app.prepare().then(() => {
  const server = express();
  server.use(body.json());
  server.use('/api/v1', api);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  // One of our error handlers will see if these errors are just validation errors
  server.use(errorHandlers.flashValidationErrors);

  // Otherwise this was a really bad error we didn't expect! Shoot eh
  if (server.get('env') === 'development') {
    /* Development Error Handler - Prints stack trace */
    server.use(errorHandlers.developmentErrors);
  }

  // production error handler
  server.use(errorHandlers.productionErrors);

  server.listen(3000, (err) => {
    if(err) throw err;
    console.log('> Ready on http://localhost:3000')
  });
})
