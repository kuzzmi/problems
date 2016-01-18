function formatOutput(n, m) {
    var tmp = n.toString();
    while (tmp.length < m) {
        tmp = ' ' + tmp;
    }
    return tmp;
}

function produceTable() {
    for (var i = 1; i <= 12; ++i) {
        var line = [];
        for (var j = 1; j <= 12; ++j) {
            line.push(formatOutput(i * j, 4));
        }
        console.log(line.join(''));
    }
}

produceTable();
