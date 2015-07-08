// var assert = require("assert");

// testing framework (usually in a separate file)
function expect(test, result, message) {
  if(test !== result) {
    throw new Error('Expected ' + test + ' to equal ' + result + '; ' + message);
  }
}

function expectError(f, message) {
  try {
    f();
  }
  catch(e) {
    return;
  }

  throw new Error('Expected an error; ' + message);
}


// ------------------------


function add(x,y) {
  return x+y;
}


function divide(x,y) {
  if(y === 0) {
    throw new Error('Divide by zero!');
  }
  return x/y;
}


// ------------------------

describe('add', function() {

  it('should add two numbers', function() {
    // assert.equal(add(2,3), 5);
    expect(add(2,3), 5);
    expect(add(2,4), 6);
  });

  it('should support negative numbers', function() {
    // assert.equal(add(-1,3), 2);
    expect(add(-1,3), 2);
  })

  it('should support floats', function() {
    // assert.equal(add(5.5,2.2), 7.7);
    expect(add(5.5,2.2), 7.7);
  })

});


// test the add function (test spec)

// expect(divide(6,3), 2, 'should divide two numbers');
// expect(divide(1,2), 0.5, 'should support floats');
// expectError(function() { return divide(1,0); }, 'dividing by 0 should throw an error');
