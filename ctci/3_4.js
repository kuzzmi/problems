var Stack = require('../dataStructures/stack');

function Game(n) {

    this.height = n;
    this.towers = [
        new Stack(), 
        new Stack(), 
        new Stack()
    ];

    for (var i = n; i > 0; --i) {
        this.towers[0].push(i);
    }

}

Game.prototype.canMove = function(from, to) {
    console.log(from, to);
    var towerFrom = this.towers[from];
    var towerTo = this.towers[to];

    if (!towerTo.peek()) {
        return true;
    }

    return towerFrom.peek() < towerTo.peek();
};

Game.prototype.makeMove = function(from, to) {
    if (this.canMove(from, to)) {
        this.towers[to].push(this.towers[from].pop());
    } else {
        console.log('Not allowed:', from, to);
    }
};

Game.prototype.print = function() {
    var str = '';

    for (var i = 0; i < this.height; i++) {
        str = 
            ( this.towers[0].pop() || '|' ) + '  -  ' +
            ( this.towers[1].pop() || '|' ) + '  -  ' +
            ( this.towers[2].pop() || '|' );

        console.log(str);
    }
};

Game.prototype.isTowerEmpty = function(i) {
    return !this.towers[i].peek();
};

Game.prototype.findAvailable = function(forWhich) {
    for (var i = 0, l = this.towers.length; i < l; i++) {
        if (i === forWhich) {
            continue;
        }
        if (this.canMove(forWhich, i)) {
            return i;
        }
    }
};

Game.prototype.move = function(from) {
    var to = this.findAvailable(from);
    this.makeMove(from, to);

    // for (var i = 0, l = this.towers.length; i < l; i++) {
    //     var v = this.towers[i];
    // }
};

var game = new Game(5);

// while (!( game.isTowerEmpty(0) && game.isTowerEmpty(1) )) {
    game.move(0);
    game.move(0);
    game.move(1);
    game.move(2);
    // game.move();
// }

game.print();
