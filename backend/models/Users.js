const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email address'],
    required: 'Please supply an email address',
  },
  category: {
    primary: {
      type: String,
      enum: ['FREE', 'SUBSCRIPTION', 'STORE', 'RETAIL'],
      default: 'FREE',
    },
    sub: {
      type: String,
      enum: ['SILVER', 'PLATINUM', 'GOLD'],
    },
  },
  links: [
    {
      // this value will be 'AmazonLink'/'FlipkartLink'/etc. - which is the actual modal name, and while querying it grabs the object id from that modal.
      kind: String,
      // this will actually be replaced the object in the sellerSchema
      item: { type: mongoose.Schema.ObjectId, refPath: 'links.kind' },
      // priority can be one of 3 priority levels only
      priority: {
        type: String,
        enum: ['STORE', 'SUBSCRIPTION', 'FREE'],
        default: 'FREE',
      },
      source: {
        type: String,
        enum: ['WEBSITE', 'BOOKMARKLET', 'APP_IOS', 'APP_ANDROID'],
        required: 'Please supply the link source',
      },
      // determines if item is being processed for this user. links once assigned are never removed, only deactivated.
      active: {
        type: Boolean,
        default: true,
      },
      created: {
        type: Date,
        default: Date.now,
      },
      updated: {
        type: Date,
        default: Date.now,
      },
      suspension: {
        date: Date,
        code: {
          type: String,
          enum: ['USAGE_QUOTA_EXCEEDED', 'FAILURE_ATTEMPTS_UPPER_LIMIT_REACHED'],
        },
      },
      alert_settings: {
        trigger_price: Number,
        email: Boolean,
        sms: Boolean,
        ios: Boolean,
        android: Boolean,
      },
    },
  ],
  // primary alert settings
  primary_alert_settings: {
    drop_only_alerts: {
      type: Boolean,
      default: true,
    },
    // allows configuring several "do not disturb" hour ranges.
    dnd: [{
      hours: [String, String],
    }],
    push_notifications: [
      {
        device_token: String,
        device_type: {
          type: String,
          enum: ['IOS', 'ANDROID'],
        },
      },
    ],
    email: {
      type: Boolean,
      default: true,
    },
    sms: {
      type: Boolean,
      default: false,
    },
    ios: {
      type: Boolean,
      default: true,
    },
    android: {
      type: Boolean,
      default: true,
    },
  },
  // populated from full contact
  profile: Schema.Types.Mixed,
  // user suspension
  suspension: {
    date: Date,
    is_suspended: Boolean,
    code: {
      type: String,
      enum: ['CONTACT_ADMIN'],
      default: 'CONTACT_ADMIN',
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('user', UserSchema);
