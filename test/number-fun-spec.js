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
  it('Should find the reciprocal of a number', ()=> {
    let actual1 = reciprocal(4);
    let actual2 = reciprocal(5);

    expect(actual1).to.equal(0.25);
    expect(actual2).to.equal(0.20);
  });

  context('should now only intake arguments between 1 and 1000000', ()=> {

  });
})
