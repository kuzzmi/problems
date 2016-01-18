// Given numbers x and n, where n is a power of 2, 
// print out the smallest multiple of n which is 
// greater than or equal to x. 
//
// Do not use division or modulo operator.

function findNumber(x, n) {
    var tmp = n;
    while (tmp < x) {
        tmp += n;
    }
    return tmp;
}

console.log(findNumber(13, 8));
