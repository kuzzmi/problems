function Node(data) {
    this.data = data;
    this.childLeft = null;
    this.childRight = null;
}

function Tree() {
    this.root = null;
}

Tree.prototype.insert = function(data) {
    var node = new Node(data);

    if (this.root === null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent = null;

        while (1) {
            parent = current;

            if (data < parent.data) {
                current = current.childLeft;
                if (current === null) {
                    parent.childLeft = node;
                    return;
                }
            } else {
                current = current.childRight;
                if (current === null) {
                    parent.childRight = node;
                    return;
                }
            }
        }
    }
};

Tree.prototype.search = function(data, node) {
    node = node || this.root;

    if (node.data === data) {
        return node;
    } else if (node.data < data) {
        if (node.childRight !== null) {
            return this.search(data, node.childRight);
        }
    } else if (node.data > data) {
        if (node.childLeft !== null) {
            return this.search(data, node.childLeft);
        }
    }

    return null;
};

Tree.prototype.preorderTraversal = function(node) {
    if (node !== null) {
        console.log(node.data);
        this.preorderTraversal(node.childLeft);
        this.preorderTraversal(node.childRight);
    }
};

Tree.prototype.inorderTraversal = function(node) {
    if (node !== null) {
        this.inorderTraversal(node.childLeft);
        console.log(node.data);
        this.inorderTraversal(node.childRight);
    }
};

Tree.prototype.postorderTraversal = function(node) {
    if (node !== null) {
        this.postorderTraversal(node.childLeft);
        this.postorderTraversal(node.childRight);
        console.log(node.data);
    }
};

var items = [ 27, 14, 35, 10, 19, 31, 42 ];
var tree = new Tree();
var that = 31;

for (var i in items) {
    tree.insert(items[i]);
}

console.log('Searching for', that, ':', tree.search(that));

tree.preorderTraversal(tree.root);
console.log('----------');
tree.inorderTraversal(tree.root);
console.log('----------');
tree.postorderTraversal(tree.root);
