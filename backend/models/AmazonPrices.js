const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmazonPriceSchema = new Schema({
  link: { type: mongoose.Schema.ObjectId, ref: 'amazon_link' },
  price: Number,
}, {
  timestamps: {
    created,
  },
});

module.exports = mongoose.model('amazon_price', AmazonPriceSchema);

