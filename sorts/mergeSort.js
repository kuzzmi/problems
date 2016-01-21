// [3, 1, 2, 5, 4] => [1, 2, 3, 4, 5]
function merge(arrA, arrB) {
    if (!arrA.length) {
        return arrB;
    } else if (!arrB.length) {
        return arrA;
    }

    if (arrA[0] < arrB[0]) {
        return [ arrA[0] ].concat(merge(arrA.slice(1), arrB));
    } else {
        return [ arrB[0] ].concat(merge(arrB.slice(1), arrA));
    }
}

function mergeSort(arr, n) {
    if (n === 0) {
        return arr;
    }

    var m = arr.length >> 1;

    var left = arr.slice(0, m);
    var right = arr.slice(m, n);

    return merge(mergeSort(left, m), mergeSort(right, n - 1));
}

console.log(mergeSort([5, 2, 5, 5, 3], 5));
