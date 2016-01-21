var LinkedList = require('../../dataStructures/linkedList');

function add(list1, list2) {

    var cur1 = list1.head;
    var cur2 = list2.head;
    var sum = new LinkedList();
    var one = 0;
    
    while(cur1.next !== null && cur2.next !== null) {

        cur1 = cur1.next;
        cur2 = cur2.next;

        var val = cur1.data + cur2.data + one;

        one = ~~(val / 10);
        val = val % 10;

        sum.addLast(val);
    }

    if (one) {
        sum.addLast(one);
    }

    return sum;
}

function addReverse(list1, list2) {

    var cur1 = list1.head;
    var cur2 = list2.head;
    var sum = new LinkedList();
    var one = 0, toIgnore;
    
    while(cur1.next !== null && cur2.next !== null) {
        toIgnore = true;

        cur1 = cur1.next;
        cur2 = cur2.next;

        var val = cur1.data + cur2.data;
        var valNext;

        if (cur1.next && cur2.next) {
            valNext = cur1.next.data + cur2.next.data;
            if (valNext / 10 > 0) {
                toIgnore = false;
                val++;
            }
        }

        one = ~~(val / 10);
        val = val % 10;

        if (toIgnore && one) {
            sum.addFirst(one);
        }

        sum.addLast(val);
    }

    return sum;
}

var list = new LinkedList();
var list2 = new LinkedList();

list.addFirst(9);
list.addFirst(9);
list.addFirst(9);

list2.addFirst(9);
list2.addFirst(9);
list2.addFirst(9);

var sum = add(list, list2);
var sumReverse = addReverse(list, list2);

console.log(list.toString());
console.log(list2.toString());

console.log(sum.toString());
console.log(sumReverse.toString());
