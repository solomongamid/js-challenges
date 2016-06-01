//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Hamming = function(hamming){
  this.hamming = hamming
};

Hamming.prototype.compute = function(strand1, strand2){
  if(strand1 === strand2) {
    return 0;
  }
  if (strand1.length !== strand2.length) {
    throw new Error('DNA strands must be of equal length.');
  }
  var mutation_count = 0;
  for (i = 0; i < strand1.length; i++){
    if(strand1[i] !== strand2[i]){
      mutation_count += 1;
    }
  }
  return mutation_count;

module.exports = Hamming;
