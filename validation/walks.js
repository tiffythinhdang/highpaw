const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateWalkInput(data) {
  let errors = {};

  data.dogs = validText(data.dogs) ? data.dogs : '';

  if (Validator.isEmpty(data.dogs)) {
    errors.dogs = 'Must select a dog'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};