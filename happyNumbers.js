// 7->49->97->130->10->1
function sq(n) {
    return n * n;
}

function calcSqrsOfDigits(int) {
    var sum = 0;

    int.toString().split('').forEach(function(i) { 
        sum += sq(+i); 
    });

    return sum;
}

function isHappyNumber(num) {

    var steps = 100,
        d = num;

    while (d !== 1 && steps-- > 0) {
        d = calcSqrsOfDigits(d);
    }

    if (d === 1) {
        return 1;
    } else {
        return 0;
    }
    
}

console.log(isHappyNumber(22));
