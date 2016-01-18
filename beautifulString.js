var lines = [
    'ABbCcc',
    'Good luck in the Facebook Hacker Cup this year!',
    'Ignore punctuation, please :) ',
    'Sometimes test cases are hard to make up.',
    'So I just go consult Professor Dalves'
];

calculateBeauty(lines);

/*
    Answer:
    Case #1: 152
    Case #2: 754
    Case #3: 491
    Case #4: 729
    Case #5: 646
 */

function calculateBeauty(strs) {

    strs.map(function(s) {
        return s.toLowerCase().replace(/[^a-z]/g, '');
    }).forEach(function(str) {
        console.log(calculateBeautyOfStr(str));
    });

}

function sortObjByValues(obj) {
    var sortable = [];
    var newObj = {};

    for (var i in obj) {
        sortable.push([i, obj[i]]);
    }

    sortable.sort(function(a, b) {
        return b[1] - a[1];
    }).forEach(function(el) {
        newObj[el[0]] = el[1];
    });

    return newObj;
}

function calculateBeautyOfStr(str) {
    var maxBeauty = 26,
        freq = calculateFrequencyOfLetters(str),
        beauty = 0;

    for (var c in freq) {
        var f = freq[c];

        beauty += f * maxBeauty;

        maxBeauty--;
    }

    return beauty;
}

function calculateFrequencyOfLetters(str) {
    var freq = {};
    str.split('').map(function(c) {
        if (!freq[c]) {
            freq[c] = 0;
        }
        freq[c]++;
    });

    return sortObjByValues(freq);
}
