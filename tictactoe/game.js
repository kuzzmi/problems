/* jshint esnext:true */
const readline = require('readline');
const State = require('./state');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.prompt();

/////////////////////////////////////////////

rl.on('line', (cmd) => {
    if (cmd.length && cmd.split(' ').length) {
        game.makeMove(cmd.split(' '));
        game.print();
        if (game.isFinished) {
            rl.close();
            console.log(game.score);
        }
    } else {
        console.log('Bad move');
    }
});

var game = new State(3);
