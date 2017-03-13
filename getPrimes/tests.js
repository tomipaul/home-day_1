'use strict';

const getPrimes = require('./library.js');
 
describe('Generate prime numbers from 0 to n', function() {
 
  describe ('n should be an integer and output should be an array of number(s)', function() {
 
    it('should return an error message if n is a string', function() {
 			expect(getPrimes('10')).toEqual('ValueError, input should be a positive integer');
 		});
 
 		it('should return an error message if n is a float', function() {
 			expect(getPrimes(12.5)).toEqual('ValueError, input should be a positive integer');
 		});
 
 		it('should return an array as output', function() {
 			expect(Array.isArray(getPrimes(0))).toBe(true);
 		});
  });
 
  describe('returned array should contain n if n is a prime number and not contain 0 and 1', function() {
 
    it('should include 163 and exclude 0, 1 in prime numbers returned for n=163', function() {
      let primesArray = getPrimes(163);
 	  	expect(primesArray).toContain(163, 'returned array should contain 163, 163 is a prime number');
 	  	expect(primesArray).not.toContain(0, '0 is not a prime number');
 	  	expect(primesArray).not.toContain(1, '1 is not a prime number');
 		});
 
 		it('should include 89 and exclude 0, 1 in prime numbers returned for n=89', function() {
 	  	let primesArray = getPrimes(89);
 	  	expect(primesArray).toContain(89, 'returned array should contain 89, 89 is a prime number');
 	  	expect(primesArray).not.toContain(0, '0 is not a prime number');
 	  	expect(primesArray).not.toContain(1, '1 is not a prime number');
 		});
 
 		it('should include 211 and exclude 0, 1 in prime numbers returned for n=211', function() {
 	  	let primesArray = getPrimes(211);
 	  	expect(primesArray).toContain(211, 'returned array should contain 211, 211 is a prime number');
 	  	expect(primesArray).not.toContain(0, '0 is not a prime number');
 	  	expect(primesArray).not.toContain(1, '1 is not a prime number');
 		});
  });
 
  describe('returned array should not contain 0, 1 and n if n is not a prime number', function() {
 
    it('should exclude 0, 1 and 91 in prime numbers returned for n=91', function() {
 	  	let primesArray = getPrimes(91);
 	   	expect(primesArray).not.toContain(91, '91 is not a prime number');
 	   	expect(primesArray).not.toContain(0, '0 is not a prime number');
 	   	expect(primesArray).not.toContain(1, '1 is not a prime number');
 	 	});
 
 	 	it('should exclude 0, 1 and 129 in prime numbers returned for n=129', function() {
 	   	let primesArray = getPrimes(129);
 	   	expect(primesArray).not.toContain(129, '129 is not a prime number');
 	   	expect(primesArray).not.toContain(0, '0 is not a prime number');
 	   	expect(primesArray).not.toContain(1, '1 is not a prime number');
 	 	});
  });
 
  describe('return an array of prime numbers from 0 to n', function() {
 
    it('should return [] for 0', function() {
 	   	expect(getPrimes(0)).toEqual([]);
 	 	});
 
 	 	it('should return [] for 1', function() {
 	   	expect(getPrimes(0)).toEqual([]);
 	 	});
 
 	 	it('should return [2] for 2', function() {
 	   	expect(getPrimes(2)).toEqual([2]);
 	 	});
 
 	 	it('should return [2,3,5] for 5', function() {
 	   	expect(getPrimes(5)).toEqual([2,3,5]);
 	 	});
 
 	 	it('should return [2,3,5,7,11,13,17,19] for 20', function() {
 	   	expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
 	 	});
 
 	 	it('should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59] for 60', function() {
 	   	expect(getPrimes(60)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59]);
 	 	});
  });
 
  describe('all prime numbers are odd numbers with the exception of number 2', function() {
 
 	  it('returned array should not contain any even numbers', function() {
 	    let primesArray = getPrimes(100);
 		  for (let primeNumber of primesArray) {
 		    if (primeNumber!=2) {
 			  	expect(primeNumber%2).not.toEqual(0);
 				}
 		  }
 	 	});
  }); 
});