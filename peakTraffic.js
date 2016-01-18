var conversations = {};
var grouped = [];

function generateWhoWithWhom(line) {
    line = line.replace('\r', '').split('\t');

    var who = line[1];
    var whom = line[2];

    if (!conversations[who]) {
        conversations[who] = [whom];
    } else {
        if (conversations[who].indexOf(whom) === -1) {
            conversations[who].push(whom);
        }
    }
}

function getAllConvsWithOne(who) {
    var convs = [];

    for (var i in conversations) {
        var conv = conversations[i];

        if (conv.indexOf(who) !== -1) {
            convs.push(conv);
        }
    }

    return convs;
}

function mergeConvs(convs) {
    var merged = [];

    convs.forEach(function(conv) {
        conv.forEach(function(who) {
            if (merged.indexOf(who) === -1) {
                merged.push(who);
            }
        });
    });

    return merged.sort();
}

var fs  = require("fs");
// fs.readFileSync('pt.txt').toString().split('\n').forEach(function (line) {
fs.readFileSync('peakTraffic.txt').toString().split('\n').forEach(function (line) {
    if (line !== "") {
        //do something here

        generateWhoWithWhom(line);
    }
});

for(var i in conversations) {
    var merged = mergeConvs(getAllConvsWithOne(i));
    if (merged.length > 1) {
        conversations[i] = merged;
        console.log(merged.join(' '));
    } else {
        delete conversations[i];
    }
}


// console.log(conversations);
