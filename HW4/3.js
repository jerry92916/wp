function filter(a, f) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i])) {
            result.push(a[i]);
        }
    }
    return result;
}

var arr = [1, 2, 3, 4];
var filteredArr = filter(arr, function(x) {
    return x % 2 === 1; 
});

console.log(filteredArr); 
