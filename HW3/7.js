function matrixMul(a, b) {
    if (a[0].length !== b.length) throw new Error("Number of columns in the first matrix must be equal to the number of rows in the second matrix");
    let result = [];
    for (let i = 0; i < a.length; i++) {
        let row = [];
        for (let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
                sum += a[i][k] * b[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}
