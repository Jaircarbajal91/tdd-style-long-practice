function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n <= 0) throw TypeError('Should be greater than 0')
  if (n >= 1000000) throw TypeError('Should be less than 1000000');
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
