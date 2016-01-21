function compress(str) {
    var result = '';

    if (!str) {
        return null;
    }

    var tmp = str[0];
    for (var i = 1; i < str.length; i++) {
        console.log(str[i], tmp);
        if (str[i] !== tmp[0]) {
            result += tmp[0] + tmp.length;
            tmp = str[i];
        } else {
            tmp += str[i];
        }
    }

    result += tmp[0] + tmp.length;

    return result.length < str.length ? result : str;
}

console.log(compress('aabca'));
