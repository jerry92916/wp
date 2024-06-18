function matrixAdd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) throw new Error("Matrices must be of same dimensions");
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
