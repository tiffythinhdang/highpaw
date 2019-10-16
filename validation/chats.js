const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateChatInput(data) {
  let errors = {};

  data.message = validText(data.message) ? data.message : "";

  if (Validator.isEmpty(data.message)) {
    errors.message = "message must have content"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

};