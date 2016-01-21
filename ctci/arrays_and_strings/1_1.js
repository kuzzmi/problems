function detectAllUnique(str) {
    var chars = {};

    for (var i = 0; i < str.length; i++) {
        if (chars[str[i]])
            return false;
        chars[str[i]] = true;
    }

    return true;
}

console.log(detectAllUnique('abcd'));
console.log(detectAllUnique('abcdd'));
