var times = [
    '02:26:31 14:44:45 09:53:27',
    '05:33:44 21:25:41'
];

function sortTime(str) {

    var schedule = str.split(' ');

    return schedule.sort(function(a, b) {
        var timeA = new Date('1990-01-01T' + a);
        var timeB = new Date('1990-01-01T' + b);

        return timeB.getTime() - timeA.getTime();
    });

}

console.log(sortTime(times[0]));
