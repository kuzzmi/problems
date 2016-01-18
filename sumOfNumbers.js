function getSum1(n) {
    var sum = 0;

    if (n === 0) {
        return 0;
    }

    var e = n % 10;

    sum += e;
    sum += getSum(( n - e ) / 10);

    return sum;
}

function getSum2(n) {
    var s = 0, e;
    while (n > 0) { e = n % 10; s += e; n -= e; n /= 10; }
    return s;
}

console.log(getSum2(23));
