var LinkedList = require('../../dataStructures/linkedList');

LinkedList.prototype.partition = function partition(x) {
    var less = new LinkedList();
    var more = new LinkedList();
    var cur = this.head;

    while (cur.next !== null) {
        cur = cur.next;

        if (cur.data < x) {
            less.addLast(cur.data);
        } else {
            more.addLast(cur.data);
        }
    }

    cur = less.head;

    while (cur.next !== null) {
        cur = cur.next;
    }

    cur.next = more.head.next;
    this.head = less.head;
    return this;
};

var list = new LinkedList();

list.addLast(1);
list.addLast(4);
list.addLast(5);
list.addLast(20);
list.addLast(15);
list.addLast(16);
list.addLast(7);
list.addLast(17);
list.addLast(18);
list.addLast(2);
list.addLast(3);
list.addLast(8);
list.addLast(19);
list.addLast(12);
list.addLast(13);
list.addLast(14);
list.addLast(30);
list.addLast(31);
list.addLast(32);

console.log(list.toString());
console.log(list.partition(20).toString());
