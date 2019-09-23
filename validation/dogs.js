const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.breed = validText(data.breed) ? data.breed : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.age = validText(data.age) ? data.age : '';

  if (!validAge(parseInt(data.age))) {
    errors.age = "Invalid age";
  }
  
  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.breed)) {
    errors.name = 'Breed field is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.name = 'Gender field is required';
  }

  if (!Validator.isIn(data.gender, ['male', 'female', 'other'])) {
    errors.name = 'Gender has to be in one of these values: male, female, other';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};