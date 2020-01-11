function AVLTree (value) {
    this.left = null
    this.right = null
    this.value = value
    this.depth = 1
}

const myTree = new AVLTree(1)

AVLTree.prototype.setDepthBasedOnChildren = function() {
    if ( this.node == null ) {
        this.depth = 0
    } else {
        this.depth = 1
    }

    if ( this.left != null ) {
        this.depth = this.left.depth + 1
    }

    if ( this.right != null && this.depth <= this.right.depth ) {
        this.depth = this.right.depth + 1
    }
}

AVLTree.prototype.rotateLL = function() {
    let valueBefore = this.value
    let rightBefore = this.right
    this.value = this.left.value

    this.right = this.left
    this.left = this.left.left
    this.right.left = this.right.right
    this.right.right = rightBefore
    this.right.value = valueBefore

    this.right.getDepthFromChildren()
    this.getDepthFromChildren()
}

AVLTree.prototype.rotateRR = function() {
    let valueBefore = this.value
    let leftBefore = this.left
    this.value = this.right.value

    this.left = this.right
    this.right = this.right.right
    this.left.right = this.left.left
    this.left.left = leftBefore
    this.left.value = valueBefore
}

AVLTree.prototype.balance = function() {
    let ldepth = this.left == null ? 0 : this.left.depth
    let rdepth = this.right == null ? 0 : this.right.depth

    if ( ldepth > rdepth + 1 ) {
        // LR rotation consists of a RR rotation of the left child
        this.left.rotateRR()
    }
}