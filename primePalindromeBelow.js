function isPalindrome(val) {
    var str = val.toString();
    var m = str.length >> 1;

    for (var i = 0; i < m; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

function isPrime(num) {
    if (num === 1) {
        return false;
    }

    for (var i = 2, l = num / 2; i <= l; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function primePalindrome(num) {
    for (var i = num; i >= 0; i--) {
        if (isPrime(i) && isPalindrome(i)) {
            return i;
        }
    }
}

console.log(primePalindrome(1000));
