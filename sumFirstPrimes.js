function sumFirstPrimes(num) { 
  var sum = 0;
  var primesIn = 0,
      i = 2;
   
  function isPrime(num) { 
    for (var i = 2, l = num / 2; i <= l; i++) { 
      if (num % i === 0) { 
        return false; 
      } 
    } 
    return true; 
  } 
  
  while (primesIn < num) {
    if (isPrime(i)) { 
        primesIn++;
        sum += i; 
    }
    i++;
  }
     
  return sum; 
}

console.log(sumFirstPrimes(1000));
