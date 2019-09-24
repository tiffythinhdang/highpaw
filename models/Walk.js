const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WalkSchema = new Schema({
  dogs: {
    // type: Schema.Types.ObjectId,
    // ref: 'dogs',
    type: [{ type: Schema.Types.ObjectId, ref: 'dogs' }], 
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  request: { // may not be necessary
    type: [{ type: Schema.Types.ObjectId, ref: 'requests' }],
    required: false,
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = Walk = mongoose.model('walks', WalkSchema);

