//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {

  if (typeof(input) === 'undefined') {
    return "Hello, World!";
  } else {
    return 'Hello, ' + input + '!';
  }
  module.exports = HelloWorld;
};

var test = new HelloWorld();
console.log(test.hello("Solomon"));

