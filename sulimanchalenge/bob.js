//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Bob = function() {};

Bob.prototype.hey = function(input) {
 if (isYelling()) {
    return 'Whoa, chill out!';
  } else if (isAsking()) {
    return 'Sure.';
  } else if (isSayingNothing()) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }

  function isYelling() {
    return input.toLowerCase() !== input && input.toUpperCase() === input;
  }

  function isAsking() {
    return input.substr(input.length - 1) === "?";
  }

  function isSayingNothing() {
    return input.trim().length == 0;
  }

};

module.exports = Bob;
