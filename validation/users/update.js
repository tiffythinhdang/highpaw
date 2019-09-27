const Validator = require('validator');
const validText = require('../valid-text');
const validAge = require('../valid-age');

module.exports = function validateUpdateInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.profilePhotoUrl = validText(data.profilePhotoUrl) ? data.profilePhotoUrl : '';

  if (!validAge(parseInt(data.age))) {
    errors.age = "Invalid age";
  }

  if (Validator.isEmpty(String(data.age))) {
    errors.age = 'Age is required'
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isIn(data.gender, ['Male', 'Female', ''])) {
    errors.gender = 'Gender must be Male, Female or empty string'
  }

  if (Validator.isEmpty(data.profilePhotoUrl)) {
    errors.profilePhotoUrl = 'Profile photo is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};