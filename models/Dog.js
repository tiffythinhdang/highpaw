// DOG TABLE
// name
// age
// breed
// gender['male', 'female', 'other', 'unknown']
// owner_id

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  profilePhotoUrl: {
    type: String,
    required: true
  },
  photoURLs: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Dog = mongoose.model('dogs', DogSchema);