var strs = [
    '9k',
    'qw7',
    'X5pn',
    'aRZM',
    'PKE',
    'JG',
    'jL',
    'aK',
    '1J',
    '13L',
    'u4',
    'gwOf',
    '6WN',
    'PBN',
    'Sb3F',
    'JdN',
    'j7w',
    'kCw',
    'CgN',
    'abc',
    'hat',
    '4W',
    'q9lo',
    'QW',
    'Zu6',
    'YE46',
    '36',
    'ET6',
    'YST',
    'xkt',
    'XWO',
    'c5s',
    '1R',
    'B4N',
    '2G',
    'kl',
    'pc2',
    'Qw',
    'QLN',
    '1l'
];

var permutationsHash = {};

function getPermutations(arr) {
    var permutations = [];

    function swap(a, b) {
        var tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    function generate(n) {
        if (n === 1) {
            permutations.push(arr.join(''));
        } else {
            for (var i = 0; i < n; ++i) {
                generate(n - 1);
                swap(n % 2 ? 0 : i, n - 1);
            }
        }
    }

    generate(arr.length);

    return permutations;
}

function permuteString(str) {
    var result = getPermutations(str.split('')).sort().join(',');
    console.log(result);
}

// permuteString(strs[0]);
permuteString(strs[1]);
// permuteString(strs[1]);
