function whatToSay(n, fizz, buzz) {
    if (n % fizz === 0 && n % buzz === 0) {
        return 'FB';
    } else if (n % fizz === 0) {
        return 'F';
    } else if (n % buzz === 0) {
        return 'B';
    } else {
        return n;
    }
}

function fizzBuzz(f, b, n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        result.push(whatToSay(i, f, b));
    }
    return result.join(' ');
}

console.log(fizzBuzz(2, 7, 15));
