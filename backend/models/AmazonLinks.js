const mongoose = require('mongoose');
const sellerSchema = require('./_sellerLinksSchema');

const amazonSchema = sellerSchema;

function getSanitizedUrl(url) {
  const asin = url.match('/([a-zA-Z0-9]{10})(?:[/?]|$)');
  if (asin && asin[1]) {
    return `http://www.amazon.in/dp/${asin[1]}`;
  }
  return url;
}

function sanitizeUrl(next) {
  this.url = getSanitizedUrl(this.url);
  next();
}

amazonSchema.pre('save', sanitizeUrl);
amazonSchema.pre('find', sanitizeUrl);
amazonSchema.pre('findOne', sanitizeUrl);

module.exports = {
  model: mongoose.model('amazon_link', amazonSchema),
  _tests: {
    getSanitizedUrl,
  },
};
