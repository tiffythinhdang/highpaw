const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  request: {
    type: Schema.Types.ObjectId,
    ref: "requests"
  },
  user: {
    id: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    name: {
      type: String,
      required: true
    },
    profilePhotoUrl: {
      type: String,
      required: true
    }
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Chat = mongoose.model('chats', ChatSchema);

module.exports = Chat;