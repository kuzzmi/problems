function State(size) {
    this.size = size;

    this.score = {
        X: 0,
        O: 0
    };

    this.isFinished = false;

    this.state = [];

    for (var i = 0; i < size; i++) {
        this.state[i] = new Array(size).fill('#');
    }
}

State.prototype.print = function() {
    for (var i = 0; i < this.size; i++) {
        console.log();
        console.log(this.state[i].join(' '));
    }
};

State.prototype.checkState = function() {

    for (var i = 0; i < this.size - 1; i++) {
        if (this.state[i][i] === this.state[i+1][i+1] && 
            this.state[i][i] !== '#') {
            this.score[this.state[i][i]] = 100;
            this.isFinished = true;
        } else {
            this.isFinished = false;
        }
    }

    return;
};

State.prototype.makeMove = function(coords) {
    if (coords.length < 2) {
        console.log('Bad move');
        return;
    }
    var x = coords[0];
    var y = coords[1];

    this.state[y][x] = 'X';

    this.checkState();
};

module.exports = State;
