const Validator = require('validator');
const validText = require('./valid-text');
const validAge = require('./valid-age');

module.exports = function validateDogInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.breed = validText(data.breed) ? data.breed : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.profilePhotoUrl = validText(data.profilePhotoUrl) ? data.profilePhotoUrl : '';
  
  if (!validAge(parseInt(data.age))) {
    errors.age = "Invalid age";
  }
  
  if (Validator.isEmpty(String(data.age))) {
    errors.age = 'Age field is required';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = 'Breed field is required';
  }

  if (!Validator.isIn(data.gender, ['male', 'female', 'other'])) {
    errors.gender = 'Gender has to be in one of these values: male, female, other';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
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