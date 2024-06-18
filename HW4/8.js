function gradient(f, p) {
    var h = 1e-5;

    var grad = [];
    for (var i = 0; i < p.length; i++) {
        var xi = p[i];
        
        var dx = Array.from(p);
        dx[i] += h; 
        var df = f(dx) - f(p);
        grad.push(df / h);
    }
    return grad;
}
function f(x) {
    return x[0] * x[0] + 2 * x[1];
}

var p = [1, 2];
console.log(gradient(f, p));
