/*
   The following recursive algorithm picks all of the k-element combinations from an ordered str: 
   * choose the first element i of your combination 
   * combine i with each of the combinations of k-1 elements chosen recursively from the str of elements larger than i. 
   Iterate the above for each i in the str.
 */

var array = [
    '1,zshua',
    '2,gcr',
    '2,ab',
    '3,egjut',
    '3,iqyua',
    '4,pppp',
    '3,yufnh',
    '1,papa',
    '3,bymq',
    '2,sndk',
    '4,spzfd',
    '5,acjvm',
    '2,dmzbj',
    '3,bpr',
    '2,xxxxx',
    '2,wk',
    '3,hnhn',
    '3,fan',
    '1,us',
    '1,nqd',
    '2,jjjjj',
    '2,rrrrr',
    '2,sxeal',
    '2,mv',
    '3,zzz',
    '1,pepe',
    '1,pot',
    '3,pop',
    '1,wxji',
    '4,tttt',
    '1,dd',
    '4,ucuc',
    '4,qgoz',
    '4,that',
    '1,abab',
    '2,bvbv',
    '2,qow',
    '1,yhyh',
    '3,bull',
    '4,qqqqq'
];
// n-sized permutations of the array elements
function generate(arr, n) {
    var permutations = [];

    if (n === 0) {
        return [ '' ];
    }

    for (var i = 0, l = arr.length; i < l; i++) {
        var v = arr[i];

        var perms = generate(arr, n - 1);

        perms.forEach(function(p) {
            if (permutations.indexOf(v.concat(p)) === -1) {
                permutations.push(v.concat(p));
            }
        });
    }

    return permutations;
}

var i = 7;

var howMuch = array[i].split(',')[0];
var what = array[i].split(',')[1];

console.log(generate(what.split(''), howMuch).sort().join(','));

// abc, 2
//
// ab, ac, ba, bc, ca, cb
