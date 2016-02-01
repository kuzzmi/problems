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

Tree.prototype.isBalanced = function(node) {
    if (node === null) {
        return false;
    }

    var isBalanced;

    var lh, rh;

    lh = this.getHeight(node.childLeft);
    rh = this.getHeight(node.childRight);

    if (Math.abs( lh - rh <= 1 )) {
        isBalanced = true;

        if (node.childLeft) {
            isBalanced = isBalanced && this.isBalanced(node.childLeft);
        }
        if (node.childRight) {
            isBalanced = isBalanced && this.isBalanced(node.childRight);
        }
        return isBalanced;
    } else {
        return false;
    }
};

Tree.prototype.getHeight = function(node) {
    var height = 0;

    if (node === null) {
        return 0;
    }

    if (node.childLeft === null && node.childRight === null) {
        return height;
    } else if (node.childLeft === null) {
        height++;
        height += this.getHeight(node.childRight);
    } else {
        height++;
        height += this.getHeight(node.childLeft);
    }
    return height;
};

Tree.prototype.toString = function(node) {
    node = node === undefined ? this.root : node;
    var str;
    if (node !== null) {
        if (node.childLeft || node.childLeft) {
            console.log('    ' + node.data + '  ');
            str = '  ' + ( node.childLeft ? '/' : ' ' ) + '   ' +
                         ( node.childRight ? '\\' : '' );
            console.log(str);
            str = '  ' + ( node.childLeft ? node.childLeft.data : '' ) + '   ' +
                         ( node.childRight ? node.childRight.data : '' );
            console.log(str);
            console.log('');
        }
        this.toString(node.childLeft);
        this.toString(node.childRight);
    }
};

module.exports = Tree;
return;

// var items = [ 27, 14, 35, 10, 19, 31, 42 ];
var items = [ 3, 2, 6, 1, 5, 7, 4 ];
// var items = [ 7, 6, 5, 4, 3, 2, 1 ];
// var items = [ 4, 2, 1, 3 ];
var tree = new Tree();
var that = 31;

for (var i in items) {
    tree.insert(items[i]);
}


console.log('Searching for', that, ':', tree.search(that));

console.log('----------');
tree.preorderTraversal(tree.root);
console.log('----------');
// tree.inorderTraversal(tree.root);
// console.log('----------');
// tree.postorderTraversal(tree.root);

tree.toString(tree.root);

console.log('Tree is balanced?', tree.isBalanced(tree.root));

console.log('Tree height:', tree.getHeight(tree.root.childLeft), tree.getHeight(tree.root.childRight));
