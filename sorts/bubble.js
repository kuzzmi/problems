function bubbleSort(arr) {
    
    var tmp;
    var swapped;

    do {
        swapped = false;
        for (var i = 1, l = arr.length; i < l; i++) {
            if (arr[i - 1] > arr[i]) {
                tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;

}

console.log(bubbleSort([3, 7, 4, 9, 5, 2, 6, 1]));
