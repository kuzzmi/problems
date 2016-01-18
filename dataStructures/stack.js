var LinkedList = require('./linkedList');

function Stack() {
    this.top = undefined;
}

Stack.prototype.pop = function() {
    if (!this.top || this.top.head.next === null) {
        return undefined;
    }

    var popped = this.top.head.next.data;
    this.top.head = this.top.head.next;
    return popped;
};

Stack.prototype.push = function(item) {
    if (!this.top) {
        this.top = new LinkedList();
    }

    this.top.addFirst(item);
};

Stack.prototype.peek = function() {
    if (!this.top || this.top.head.next === null) {
        return undefined;
    }
    return this.top.head.next.data;
};

module.exports = Stack;
