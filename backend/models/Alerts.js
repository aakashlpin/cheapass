const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlertsSchema = new Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'user' },
  link: {
    kind: String,
    item: {
      type: mongoose.Schema.ObjectId,
      refPath: 'link.kind',
    },
  },
  from: Number,
  to: Number,
  publish_responses: [
    {
      published_to: {
        type: String,
        enum: ['EMAIL', 'MOBILE_IOS', 'MOBILE_ANDROID', 'SMS'],
        required: 'Please supply the `publish_response.published_to` value',
      },
      response: {
        type: String,
        required: 'Please supply the `publish_response.response` value',
      },
    },
  ],
}, {
  timestamps: {
    created: 'sent_at',
  },
});

module.exports = mongoose.model('alert', AlertsSchema);

