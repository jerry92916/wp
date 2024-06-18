function matrixAdd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) {
        throw new Error("Matrices must be of the same dimensions");
    }

    let result = [];
    for (let i = 0; i < a.length; i++) {
        let row = [];
        for (let j = 0; j < a[i].length; j++) {
            row.push(a[i][j] + b[i][j]);
        }
        result.push(row);
    }
    return result;
}

let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
let sum = matrixAdd(matrix1, matrix2);
console.log(sum);
