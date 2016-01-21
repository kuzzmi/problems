var LinkedList = require('../../dataStructures/linkedList');

function getFromLast(list, k) {
    
    var fast = list.head.next;
    var mid = 0, l = 0, i = 0, cur = list.head.next;

    while (fast !== null) {
        console.log(mid);
        mid++;
        fast = fast.next;
        if (!fast) {
            l = mid * 2 - 1;
            break;
        }
        fast = fast.next;
        if (!fast) {
            l = mid * 2;
            break;
        }
    }

    while (i + 1 !== l - k) {
        cur = cur.next;
        i++;
    }

    return cur.data;

}

var list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addLast(4);
list.addLast(5);
list.addLast(7);
list.addLast(8);
list.addLast(12);
list.addLast(13);
list.addLast(14);
list.addLast(15);
list.addLast(16);
list.addLast(17);
list.addLast(18);
list.addLast(19);
list.addLast(20);
list.addLast(30);
list.addLast(31);
list.addLast(32);

console.log(getFromLast(list, 2));

console.log(list.toString());
