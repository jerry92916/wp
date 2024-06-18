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

function sumPrime(n) {
    let sum = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            sum += i; 
        }
    }
    console.log(sum); 
}
sumPrime(10); 
sumPrime(20); 
