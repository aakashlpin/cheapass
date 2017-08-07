const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlipkartPriceSchema = new Schema({
  link: { type: mongoose.Schema.ObjectId, ref: 'flipkart_link' },
  price: Number,
}, {
    timestamps: {
      created,
    },
  });

module.exports = mongoose.model('flipkart_price', FlipkartPriceSchema);

