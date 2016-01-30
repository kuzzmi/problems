function processData(input) {
    var lines = input.split('\n');
    
    var n = +lines[0].split(' ')[0];
    var m = +lines[0].split(' ')[1];
    var matrix = [];
    var i, j;
    
    for (i = 0; i < n; i++) {
        matrix.push(lines[i + 1].split('').map(function(v) {
            if (v === 'B') {
                return 0;
            } else {
                return 1;
            }
        }));
    }
    
    var max1 = 0;
    var max2 = 0;
    var res = 0, x, y;
    
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            res = findBest(matrix, i, j);
            if (res > max1) {
                max1 = res;
                x = i;
                y = j;
            }
        }
    }
    
    if (!max1) {
        console.log(0);
        return 0;
    }
    
    res = getShift(max1);
    
    matrix[x][y] = 0;
    for (i = -res; i <= res; i++) {
        matrix[x][y + i] = 0;
        matrix[x + i][y] = 0;
    }
        
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            res = findBest(matrix, i, j);
            if (res > max2) {
                max2 = res;
            }
        }
    }
    
    console.log(max1 * max2);
    
}

function getShift(sum) {
    return sum/4 + 3/4 - 1;
}

function findBest(matrix, i, j) {
    var shiftI = 0;
    var shiftJ = 0;
    var sum = 1;
    
    if (!isGood(matrix[i][j])) {
        return 0;
    }
    
    while (
            i < matrix.length &&
            j < matrix[0].length &&
            i + shiftI < matrix.length &&        
            j + shiftJ < matrix[0].length &&   
            i - shiftI >= 0 && 
            j - shiftJ >= 0 &&
        
            isGood(matrix[i][j]) &&
            isGood(matrix[i + shiftI][j]) &&
            isGood(matrix[i - shiftI][j]) &&
            isGood(matrix[i][j + shiftJ]) &&
            isGood(matrix[i][j - shiftJ])
          ) {
        shiftI++;
        shiftJ++;
    }
    
    sum = (shiftI - 1) * 4 + 1;
    
    return sum;
}
        
function isGood(val) {
    return val === 1;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

