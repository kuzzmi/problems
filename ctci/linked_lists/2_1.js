var LinkedList = require('../../dataStructures/linkedList');

function removeDuplicates(list) {
    var cur = list.head.next;
    var deleted = false;
    var runner;

    while (cur !== null) {

        deleted = false;
        runner = cur.next;

        while (runner !== null) {
            console.log('Comparing', cur.data, runner.data, 'in', list.toString());
            if (cur.data === runner.data) {
                console.log('Removing', runner.data);
                deleted = true;
                list.delete(list.head, cur.data);
            }
            runner = runner.next;
        }

        // If we deleted something, we need to start from the 
        // beginning, to avoid duplicated duplicates...
        // if (deleted) {
            // cur = cur.next;
        // } else {
            // if not, we can go to the next item
            cur = cur.next;
        // }
    }
}

var list = new LinkedList();
list.addLast(2);
list.addLast(2);
list.addLast(1);
list.addLast(3);
list.addLast(3);
list.addLast(2);
list.addLast(2);
list.addLast(6);
list.addLast(6);
list.addLast(2);
list.addLast(2);
list.addLast(2);
list.addLast(2);
list.addLast(1);
list.addLast(1);
list.addLast(1);
list.addLast(1);
list.addLast(0);
list.addLast(0);
list.addLast(0);
list.addLast(0);
list.addLast(9);
list.addLast(9);
list.addLast(9);

console.log(list.toString());

list.delete(list.head, 2);
list.delete(list.head, 2);
list.delete(list.head, 2);

// removeDuplicates(list);

console.log(list.toString());
