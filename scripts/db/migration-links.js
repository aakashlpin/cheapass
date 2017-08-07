const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// TODO require all old and new models here.

const oldDb = mongoose.createConnection('mongodb://localhost:27017/streetsmart-production');
const newDb = mongoose.createConnection('mongodb://localhost:27017/cheapass');

mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const oldAmazonJobs = oldDb.model('amazon_jobs');
const newAlertsModel = newDb.model('alert');

const requiredKeys = { productPriceHistory: 0 };

const amazonJobsSteam = amazonJobs.find({}, requiredKeys).limit(10).stream();

amazonJobsSteam.on('data', async function(doc) {
  // per doc
  const {
    email,
    productImage,
    productName,
    productURL,
    suspended,
    failedAttempts,
    alertFromPrice,
    alertToPrice,
  } = doc;

  /**
   * 1. alertFromPrice and alertToPrice go in the `alerts` collection
   */

  const alertDoc = await newAlertsModel.save({

  });

  /**
   * 2. productImage,
    productName,
    productURL,
    suspended,
    go in the `links` collection
   */

  /**
   * email goes in the `users` collection
   */



}).on('error', function (err) {
  // handle the error
}).on('close', function () {
  // the stream is closed
});

