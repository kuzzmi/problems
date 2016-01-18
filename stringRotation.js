function isRotated(str1, str2) {
    var indexOfFirst = str2.indexOf(str1[0]);

    var right = str2.slice(indexOfFirst);
    var left = str2.slice(0, indexOfFirst);

    return [right, left].join('') === str1;
}

console.log(isRotated('Hello', 'lloHe'));
