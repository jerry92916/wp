function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
console.log(gcd(12, 8));
console.log(gcd(25, 15)); 
console.log(gcd(14, 21)); 
