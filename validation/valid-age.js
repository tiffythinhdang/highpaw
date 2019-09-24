const validAge = num => {
  return typeof num === 'Integer' && num > 0;
}

module.exports = validAge;