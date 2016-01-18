function getPermutations(str) {
    if (str.length === 1) {
        return [str];
    }

    var perms = [];

    for (var i = 0, l = str.length; i < l; i++) {
        var v = str[i];

        var slice = str.slice(0, i) + str.slice(i + 1);
        var cPerm = getPermutations(slice);

        cPerm.forEach(function(c) {
            perms.push(v + c);
        });
    }

    return perms;
}

console.log(getPermutations('abcbcabab').length);
