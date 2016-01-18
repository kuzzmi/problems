// [ 1, 2, 3, 4, 5 ]

function binarySearch(arr, n, value) {
    
    if (n === 1) {
        return arr[0] === value ? true : false;
    }

    var m = n >> 1,
        i = 0;

    if (value < arr[m]) {
        return binarySearch(arr.slice(0, m - 1), m - 1, value);
    } else if (value > arr[m]) {
        return binarySearch(arr.slice(m + 1), m + 1, value);
    } else if (value === arr[m]) {
        return true;
    }

    return false;

}

console.log(binarySearch([1, 2, 3, 4, 5], 5, 5));
