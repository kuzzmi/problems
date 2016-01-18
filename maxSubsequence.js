function findCycle(arr) {

    // transform string to array of integers
    arr = typeof arr === 'string' ? arr.split(' ').map(function(e) { return +e; }) : arr;

    var e, d, index, i, step = 0,
        cycle = [], shift = 0,
        toContinue = true;

    while (step < arr.length || !cycle.length) { // while we’re not on the last step

        e = arr[step]; // Get the first element

        // Get the index of the next occurrence of the element
        index = arr.indexOf(e, step + 1);

        if (index !== -1) {

            d = index - step;
            shift = 0;

            while (shift < d && toContinue) {
                i = index + d + shift;
                while (i < arr.length && toContinue) {
                    if (arr[i] !== arr[index - d]) {
                        toContinue = false;
                    }
                    i++;
                }
                shift++;
            }

            cycle = arr.slice(step + 1, index + 1);

        }

        // Increase index position of the element we’re checking
        step++;
    }

    return cycle;
}

console.log(findCycle('5 2 1 12 8 3 14 9 13 7 11 10 6 15 0 35 83 4 82 69 55 47 31 46 35 83 4 82 69 55 47 31 46 35 83 4 82 69 55 47 31 46 35 83 4 82 69 55 47 31 46'));
