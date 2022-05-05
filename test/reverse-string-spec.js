const chai = require("chai");
const reverseString = require('../problems/reverse-string');
// var assert = chai.assert;
const expect = chai.expect;
// var should = chai.should();

describe('reverseString function', () => {

  it('should reverse a string', () => {
    const actual = reverseString('fun')
    expect(actual).to.equal('nuf');
  });

  describe('Throw error if not string', () => {
    it('should throw an error if string is not type of String', () => {
      const obj = { "key": 'value'};
      const array = [1, 2, 3, 4, 5];
      const number = 89;

      expect(() => reverseString(obj)).to.throw(TypeError);
      expect(() => reverseString(array)).to.throw(TypeError);
      expect(() => reverseString(number)).to.throw(TypeError);
    });
  })
})
