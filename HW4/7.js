function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
console.log(lcm(12, 8)); 
console.log(lcm(25, 15)); 
console.log(lcm(14, 21)); 
