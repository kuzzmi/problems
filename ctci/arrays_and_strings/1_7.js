// Baaaaaad
function zerofy(arr) {
    var flags = {};

    function hash(i, j) {
        return '' + i + j;
    }

    function zeroficate(x, y) {
        var i = 0;

        if (!flags[hash(x, y)]) {
            flags[hash(x, y)] = true;
        }

        for (i = 0; i < arr.length; i++) {
            if (arr[i][y] !== 0) {
                flags[hash(i, y)] = true;
                arr[i][y] = 0;
            }
        }

        for (i = 0; i < arr[x].length; i++) {
            if (arr[x][i] !== 0) {
                flags[hash(x, i)] = true;
                arr[x][i] = 0;
            }
        }
    }
    
    for (var i = 0, l = arr.length; i < l; i++) {
        for (var j = 0, w = arr[i].length; j < w; j++) {
            var v = arr[i][j];
            if (v === 0 && !flags[hash(i, j)]) {
                zeroficate(i, j);
            }
        }
    }
}

// Goooooood
function zerofy2(arr) {
    var rows = [];
    var columns = [];

    var i, j;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            var v = arr[i][j];
            if (v === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[0].length; j++) {
            if (rows[i] || columns[j]) {
                arr[i][j] = 0;
            }
        }
    }
}

function print(arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
        console.log(arr[i]. join(' '));
    }
    console.log();
}

var matrix = [
    [ 0, 1, 1, 0 ],
    [ 1, 1, 1, 1 ],
    [ 1, 1, 1, 1 ]
];

print(matrix);
zerofy2(matrix);
print(matrix);
