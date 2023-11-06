function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function getPrimesFunctional(limit) {
    return Array.from({ length: limit - 1 }, (_, i) => i + 2).filter(isPrime);
  }
  
  const primeNumbers = getPrimesFunctional(30);
  console.log(primeNumbers);
  
  





  const sieveOfEratosthenes = (limit) => {
    if (limit <= 1) {
      return [];
    }
    // Create the output
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;
  
    // Iterate from 2 to the limit
    for (let i = 2; i <= limit; i++) {
      if (output[i] === true) {
        // Mark all multiples of i as non-prime
        for (let j = i * 2; j <= limit; j = j + i) {
          output[j] = false;
        }
      }
    }
    // option 1:replace true values with the corresponding number value and filter out non-primes
    return output.reduce((primes, current, index) => {
      if (current) {
        primes.push(index);
      }
      return primes
    }, []);
  }
  
  const test = sieveOfEratosthenes(13);
  // should return [2, 3, 5, 7, 11, 13]
  console.log(test);
  
  // Leave this line for testing:
  module.exports = sieveOfEratosthenes;







  const sieveOfEratosthenes = (limit) => {
    // Handle edge cases
    if (limit <= 1) {
      return [];
    }
    // Create the output
    const output = new Array(limit + 1).fill(true);
    // Mark 0 and 1 as non-prime
    output[0] = false;
    output[1] = false;
  
    // Iterate up to the square root of the limit
    for (let i = 2; i < Math.pow(limit, 0.5); i++) {
      if (output[i] === true) {
        // Mark all multiples of i as non-prime
        for (let j = Math.pow(i, 2); j <= limit; j = j + i) {
          output[j] = false;
        }
      }
    }
  
    // Remove non-prime numbers
    return output.reduce((primes, current, index) => {
      if (current) {
        primes.push(index);
      }
      return primes
    }, []);
  }