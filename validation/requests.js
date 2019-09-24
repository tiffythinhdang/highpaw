const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRequestStatus(data) {
  let errors = {};

  data.status = validText(data.status) ? data.status : "";

  if (!Validator.isIn(data.status, ["pending", "approved", "denied", "fulfilled"])) {
    errors.status = "status must be pending, approved, denied, or fulfilled"
  }

  return {
    errors,
    isValid: Object.keys(errors) === 0
  }

}