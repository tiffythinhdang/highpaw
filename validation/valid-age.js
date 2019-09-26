const validAge = num => {
  return typeof num === 'number' && num > 0;
}

module.exports = validAge;