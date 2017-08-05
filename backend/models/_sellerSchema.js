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
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = _sellerSchema;
