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
    var towerFrom = this.towers[from];
    var towerTo = this.towers[to];

    if (!towerTo.peek()) {
        return true;
    }

    return towerFrom.peek() < towerTo.peek();
};

Game.prototype.makeMove = function(from, to) {
    if (this.isCompleted()) {
        return;
    }

    if (this.canMove(from, to)) {
        this.towers[to].push(this.towers[from].pop());
    } else {
        this.towers[from].push(this.towers[to].pop());
    }
};

Game.prototype.isTowerEmpty = function(i) {
    return !this.towers[i].peek();
};

Game.prototype.isCompleted = function() {
    return this.isTowerEmpty(0) && this.isTowerEmpty(1);
};

Game.prototype.move = function(from) {
    if (n % 2 === 0) {
        while (!this.isCompleted()) {
            this.makeMove(0, 1);
            this.makeMove(0, 2);
            this.makeMove(1, 2);
        }
    } else {
        while (!this.isCompleted()) {
            this.makeMove(0, 2);
            this.makeMove(0, 1);
            this.makeMove(2, 1);
        }
    }
};

Game.prototype.toString = function() {
    var result = [];
    var str = '';

    for (var i = 0; i < this.height; i++) {
        str = 
            ( this.towers[0].pop() || '|' ) + '  -  ' +
            ( this.towers[1].pop() || '|' ) + '  -  ' +
            ( this.towers[2].pop() || '|' );

        result.push(str);
    }
    return result.join('\n');
};

var n = 5;
var game = new Game(n);

game.move();

console.log(game.toString());
