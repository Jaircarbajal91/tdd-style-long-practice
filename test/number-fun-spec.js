const chai = require("chai");
const expect = chai.expect;

const {returnsThree, reciprocal} = require('../problems/number-fun');

describe('returnsThree function', () => {
  it('should return the number 3', () => {
    let actual = returnsThree();
    expect(actual).to.equal(3);
  });
})

describe('reciprocal function', () => {

  context('Valid arguments', () => {
    it('Should find the reciprocal of a number', ()=> {
      let actual1 = reciprocal(4);
      let actual2 = reciprocal(5);

      expect(actual1).to.equal(0.25);
      expect(actual2).to.equal(0.20);
    });
  })

  context('Invalid arguments', ()=> {
    it('should be greater than 0', () => {
      let num1 = 0;
      let num2 = -10;

      expect(() => reciprocal(num1)).to.throw(TypeError);
      expect(() => reciprocal(num2)).to.throw(TypeError);
    })
    it('should be less than 1000000', () => {
      let num1 = 1000000;
      let num2 = 2024000;

      expect(() => reciprocal(num1)).to.throw(TypeError);
      expect(() => reciprocal(num2)).to.throw(TypeError);
    })
  });
})
