class BinaryNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null
    }
}

function traversal(node) {
    if(node === null) {
        return false
    } else if (node.left != null) {
        console.log(node.val);
        traversal(node.left)
    } else if (node.rigth !== null) {
        console.log(node.val);   
        traversal(node.right)
    }
}

function traversalArr(node) {
    BST.count = 0
    newArr = [];
    if(node === null) {
        return false
    } else if (node.left != null) {
        newArr.push(node.val)
        BST.count += 1
        traversal(node.left)
    } else if (node.rigth !== null) {
        newArr.push(node.val) 
        BST.count += 1  
        traversal(node.right)
    }
}

let tree = new BST();
tree.root = new BinaryNode(70)
tree.root.left = new BinaryNode(50)
tree.root.right = new BinaryNode(75)
tree.root.left.right = new BinaryNode(66)
tree.root.left.left = new BinaryNode(15)
tree.root.right.left = new BinaryNode(99)
tree.root.right.right = new BinaryNode(100)

console.log(traversal(tree.root));