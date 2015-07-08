// unit testing is a set of expectations, formalized in code, for your application code, which can be run in automated manner

// Where is unit testing most helpful?
// 1. test-driven development
// 2. refactoring

// Characteristics of a Assertion Library
// - compare a test value with an expected result, and throw an error if they are not equal
// - specify a human-readable message per test
// - will let you test failure cases
// - will give you convenience methods for testing different types of expectations
//   - deepEqual
//   - types

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





// application code (usually in a separate file)
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





// unit tests (usually in a separate file)
// ------------------------





// test the add function (test spec)
expect(add(2,3), 5, 'should add two numbers');
expect(add(-1,3), 2, 'should support negative numbers');
expect(add(5.5,2.2), 7.7, 'should support floats');

expect(divide(6,3), 2, 'should divide two numbers');
expect(divide(1,2), 0.5, 'should support floats');
expectError(function() { return divide(1,0); }, 'dividing by 0 should throw an error');
