function rotate(arr) {
    function swap(i1, j1, i2, j2) {
        var tmp = arr[i1][j1];
        arr[i1][j1] = arr[i2][j2];
        arr[i2][j2] = tmp;
    }

    var n = arr.length;
    var l = n - 1;
    var r = n >> 1;

    for (var i = 0; i < r; i++) {
        for (var j = i; j < l - i; j++) {
            swap(i, j, j, l - i);
            swap(i, j, l - i, l - j);
            swap(i, j, l - j, i);
        }
    }
    
}

function print(arr) {
    for (var i = 0, l = arr.length; i < l; i++) {
        console.log(arr[i]. join(' '));
    }
    console.log();
}

var matrix1 = [
    [ 'a', 'b', 'c', 'd', 'e', '0' ],
    [ 'f', 'g', 'h', 'i', 'j', '1' ],
    [ 'k', 'l', 'm', 'n', 'o', '2' ],
    [ 'p', 'q', 'r', 's', 't', '3' ],
    [ 'u', 'v', 'w', 'x', 'y', '4' ],
    [ '5', '6', '7', '8', '9', '#' ]
];
var matrix4 = [
    [ 'a', 'b', 'c', 'd', 'e' ],
    [ 'f', 'g', 'h', 'i', 'j' ],
    [ 'k', 'l', 'm', 'n', 'o' ],
    [ 'p', 'q', 'r', 's', 't' ],
    [ 'u', 'v', 'w', 'x', 'y' ],
];

print(matrix1);
rotate(matrix1);
rotate(matrix1);
print(matrix1);
print(matrix4);
rotate(matrix4);
rotate(matrix4);
print(matrix4);
