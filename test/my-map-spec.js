const chai = require('chai')
const spies = require('chai-spies');

chai.use(spies);

const should = chai.should()
const expect = chai.expect;


const myMap = require('../problems/my-map');

describe('myMap function', () => {
  let array;
  beforeEach(() => {
    array = new Array();
  })

  it('should work like the built in .map function', () => {
    array = [1, 2, 3, 4, 5]
    const cb = (val, index, array) => val * 3;

    const expected = array.map(cb);
    const actual = myMap(array, cb);

    expect(actual).to.be.an('array');
    expect(actual).to.eql(expected)
    expect(actual.length).to.equal(expected.length);
  })

  it('should not mutate the original array', () => {
    expect(array).to.equal(array);
  })

  it('should not use the built in .map function', () => {
    const mapSpy = chai.spy.on(Array.prototype, "map");

    myMap([100, 25, 81, 64], Math.sqrt);

    expect(mapSpy).to.have.not.been.called();
  })

  it('should invoke the callback function on each element in the array', () => {
    
  })
})
