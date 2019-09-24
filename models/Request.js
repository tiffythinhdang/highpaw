const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  walk: {
    type: Schema.Types.ObjectId,
    ref: "walks"
  },
  requester: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  status: {
    type: String,
    required: true,
    default: "pending"
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Request = mongoose.model('requests', RequestSchema);

module.exports = Request;