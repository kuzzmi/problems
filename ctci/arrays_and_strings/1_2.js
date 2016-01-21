function reverse(str) {
    str = str.split('');

    var n = str.length;
    var m = n >> 1;
    var i = m;
    i += str % 2 === 0 ? 1 : 0;

    while (i !== 0) {
        console.log('Changing', str[m - i], str[m + i]);
        var tmp = str[m - i];
        str[m - i] = str[m + i];
         str[m + i] = tmp;
        i--;
    } 

    return str.join('');
}

console.log(reverse('abcdefg'));
console.log(reverse('abcdef'));
