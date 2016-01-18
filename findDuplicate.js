function findDuplicate(arr) {
    var l = arr.length;

    var exp = ( l * (l + 1) ) / 2;
    var actual = arr.reduce(function(a,b) { return a+b; }, 0);

    return arr[exp - actual];
}

console.log(findDuplicate([1,2,3,4,5,6,6]));
