var args = [
    '2',
    'Hello World',
    'CodeEval',
    'Quick Fox',
    'A',
    'San Francisco'
];

function getLongestLines() {
    var linesQty = +arguments[0],
        lines = Array.prototype.slice.call(arguments, 1);

    lines.sort(function(a, b) {
        return b.length - a.length;
    }).slice(0, linesQty).forEach(function(l) {
        console.log(l);
    });

}

getLongestLines.apply(this, args);
