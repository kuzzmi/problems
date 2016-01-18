function insSort(arr) {

    var tmp;

    for (var j, i = 1, l = arr.length; i < l; i++) {
        var v = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            tmp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = tmp;
            j--;
        }
    }

    return arr;

}

console.log(insSort([3, 7, 4, 9, 5, 2, 6, 1]));


