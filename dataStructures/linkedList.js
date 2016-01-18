function Link(data, next) {
    this.data = data || null;
    this.next = next || null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.addFirst = function(data) {

    var node = new Link(data);

    if (this.head === null) {
        this.head = new Link();
        this.head.next = node;
    } else {
        node.next = this.head.next;
        this.head.next = node;
    }

};

LinkedList.prototype.addLast = function(data) {
    if (this.head === null) {
        return this.addFirst(data);
    }

    var tmp = this.head;

    while (tmp.next !== null) {
        tmp = tmp.next;
    }

    var node = new Link(data);

    tmp.next = node;
};

LinkedList.prototype.addAfter = function(key, data) {
    if (this.head === null) {
        return false;
    }

    var tmp = this.head.next;

    while (tmp.data !== key && tmp.next !== null) {
        tmp = tmp.next;
    }
    
    if (tmp.next === null && tmp.data !== key) {
        return false;
    } else {
        var node = new Link(data);
        node.next = tmp.next;
        tmp.next = node;
    }
};

LinkedList.prototype.addBefore = function(key, data) {
    if (this.head === null) {
        return false;
    }

    var tmp = this.head.next;

    while (tmp.next !== null && tmp.next.data !== key) {
        tmp = tmp.next;
    }
    
    if (tmp.next === null) {
        return false;
    } else {
        var node = new Link(data);
        node.next = tmp.next;
        tmp.next = node;
    }
};

module.exports = LinkedList;
