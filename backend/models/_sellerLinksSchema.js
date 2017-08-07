const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const _sellerSchema = new Schema({
  url: {
    type: String,
    trim: true,
    index: true,
    unique: true,
    lowercase: true,
    validate: [validator.isURL, 'Invalid URL'],
    required: 'Please supply a URL',
  },
  users: [
    { type: mongoose.Schema.ObjectId, ref: 'user' },
  ],
  name: {
    type: String,
    required: 'Please supply the product name',
  },
  price: {
    type: Number,
    required: 'Please supply the product price',
  },
  category: {
    type: String,
    default: 'UNCATEGORIZED',
  },
  image_url: String,
  active: {
    type: Boolean,
    default: true,
  },
  suspension_history: [{
    date: Date,
    state: {
      type: String,
      enum: ['SUSPENDED', 'ACTIVATED'],
    },
    code: {
      type: String,
      enum: ['MAX_FAILURE_ATTEMPTS_REACHED', 'MANUAL_ACTIVATION', 'AUTO_ACTIVATION'],
    },
  }],
}, {
  timestamps: true,
});

module.exports = _sellerSchema;
