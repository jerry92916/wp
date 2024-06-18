function vectorAdd(a, b) {
    if (a.length !== b.length) {
        throw new Error("Vectors must be of the same length");
    }

    let result = [];
    for (let i = 0; i < a.length; i++) {
        result.push(a[i] + b[i]);
    }
    return result;
}

let vector1 = [1, 2, 3];
let vector2 = [4, 5, 6];
let sum = vectorAdd(vector1, vector2);
console.log(sum);
