function countChar(str) {
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
console.log(countChar("aabccadeaac"));
