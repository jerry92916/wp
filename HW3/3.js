function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    if (n % 2 === 0) {
        return false; 
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false; 
        }
    }
    return true; 
}

console.log(isPrime(2)); 
console.log(isPrime(3));  
console.log(isPrime(4));  
console.log(isPrime(29)); 
console.log(isPrime(30)); 
