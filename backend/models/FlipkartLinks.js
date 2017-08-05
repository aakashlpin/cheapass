const mongoose = require('mongoose');
const url = require('url');
const sellerSchema = require('./_sellerSchema');

mongoose.Promise = global.Promise;

const flipkartSchema = sellerSchema;

function sanitizeURL(next) {
  const { host, pathname, query, protocol } = url.parse(this.url, true);

  const pid = query.pid ? `?pid=${query.pid}` : '';

  let updatedPathname = pathname;;
  if (pathname.indexOf('/dl') !== 0) {
    pathname = `/dl${pathname}`;
  }

  let updatedHost = host.replace('www.flipkart.com', 'dl.flipkart.com');
  this.url = `${protocol}//${updatedHost}${updatedPathname}${pid}`;

  next();
}

flipkartSchema.pre('save', sanitizeURL);
flipkartSchema.pre('find', sanitizeURL);
flipkartSchema.pre('findOne', sanitizeURL);

module.exports = {
  model: mongoose.model('FlipkartLink', flipkartSchema),
  _tests: {
    sanitizeURL,
  },
};
