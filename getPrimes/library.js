function getPrimes(n) {
  if (!Number.isInteger(n)) {
    return "ValueError, input should be a positive integer";
  }
  let primesArray = [];
	// 2 is the first prime number and the only even number that is prime 
	// so we check if n is 2 or greater than 2 and include 2 in the primesArray
  if (n >= 2) {
    primesArray.push(2);
  }
	//All other primes are odd so we begin from 3 and iterate through odd numbers.
  for(let number=3; number<=n; number+=2) {
    if (isPrime(number)) {
      primesArray.push(number);
    }
  }
  return primesArray;
}

function isPrime(number) {
  //To know if the odd number is prime, we check whether any odd integer from 3 to the 
  //square root of the odd number evenly divides the odd number with no remainder. 
  let primeDivisor = 3;
  let numberSquareRoot = Math.floor(Math.sqrt(number));
  while(primeDivisor <= numberSquareRoot) {
    if (number%primeDivisor===0) {
      return false;
    }
    primeDivisor+=2;
  }
  return true;
}

module.exports = getPrimes;