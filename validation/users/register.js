const Validator = require('validator');
const validText = require('../valid-text');
const validAge = require('../valid-age');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.password2 = validText(data.password2) ? data.password2 : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.age = validText(data.age) ? data.age : '';
  data.profilePhotoUrl = validText(data.profilePhotoUrl) ? data.profilePhotoUrl : '';

  // if (!validAge(data.age)) {
  //   errors.age = "Invalid age";
  // }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  if (!Validator.isIn(data.gender, ['Male', 'Female', ''])) {
    errors.gender = 'Gender must be Male, Female or empty string'
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age is required'
  }

  if (!Validator.isInt(data.age, {min: 0})) {
    errors.age = 'Age is invalid'
  }

  if (Validator.isEmpty(data.profilePhotoUrl)) {
    errors.profilePhotoUrl = 'Profile photo is required';
  }

  if (!Validator.isURL(data.profilePhotoUrl)) {
    errors.profilePhotoUrl = 'Uploading photo failed';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};