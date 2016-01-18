function rotateChar(c, n) {
    return String.fromCharCode(c.charCodeAt(0) + n);
}

function isRotEq(str1, str2) {
    var diff = str2.charCodeAt(0) - str1.charCodeAt(0),
        i = 0;

    if (diff < 0) {
        return isRotEq(str2, str1);
    }

    if (diff > 0 && str1.length === str2.length) {
        while (i < str1.length) {
            if (str2[i] !== rotateChar(str1[i], diff)) {
                return false;
            }
            i++;
        }
    } else {
        return false;
    }

    return true;
}

function group(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (isRotEq(arr[i], arr[j])) {
                result.push([arr[i], arr[j]]);
                arr.splice(j, 1);
                arr.splice(i, 1);
                console.log(arr);
                i--;
                break;
            }
        }
    }

    arr.forEach(function(a) {
        result.push([a]);
    });

    return result;
}

console.log(group(['a', 'b', 'cdef', 'wtf', 'abcd', 'adv']));

