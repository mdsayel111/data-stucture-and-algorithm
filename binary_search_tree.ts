{
    class Node<T> {
        private data: T
        private leftNode: Node<T> | null = null
        private rightNode: Node<T> | null = null
        constructor(data: T) {
            this.data = data
        }
        // preveous node setter function
        set setLeftNode(node: Node<T>) {
            // this.prevNode = node
            this.leftNode = node
        }
        // next node setter function
        set setRightNode(node: Node<T>) {
            this.rightNode = node
        }
        // node data getter function
        get getNodeData() {
            return this.data
        }
        // next node getter function
        get getLeftNode() {
            return this.leftNode
        }
        // next node getter function
        get getRightNode() {
            return this.rightNode
        }
    }

    // creat binary search tree class
    class BinarySearchTree<T> {
        private head: Node<T> | null = null

        // creat travarsePreOrder methood for travarse whole tree 
        travarsePreOrder() {
            // travarse element list
            const nodeList: T[] = []

            // if this.head is null, means no node is in this tree, then return empty array
            if (!this.head) {
                return nodeList
            }

            // creat function for travarse tree recursively
            const preOrder = (node: Node<T>) => {
                // console.log(node);
                // add node.getData to nodeList
                nodeList.push(node.getNodeData)
                // console.log(node);
                // if node.getLeftNode !== null, then travarse the subtree consider the root node is node.getLeftNode
                if (node.getLeftNode) {
                    preOrder(node.getLeftNode)
                }
                // if node.getRighttNode !== null, then travarse the subtree consider the root node is node.getRighttNode
                if (node.getRightNode) {
                    preOrder(node.getRightNode)
                }
            }
            preOrder(this.head)
            return nodeList
        }

        // creat add node method
        addNode(data: T) {
            // creat new node
            const newNode = new Node(data)
            // if head is null, means newNode will be first node. then set new node to head
            if (!this.head) {
                return this.head = newNode
            }
            // if this line is exicute means head is not null, need to find right place for new node            
            let currentNode: Node<T> | null = this.head
            let prevNode: Node<T> | null = null
            while (currentNode) {
                // if currentNode data is getter than newNode data then current will be currentNode.leftNode otherwise current will be currentNode.rightNode
                if (currentNode.getNodeData > newNode.getNodeData) {
                    prevNode = currentNode
                    currentNode = currentNode.getLeftNode
                } else {
                    prevNode = currentNode
                    currentNode = currentNode.getRightNode
                }
            }

            if (prevNode!.getNodeData > newNode.getNodeData) {
                prevNode!.setLeftNode = newNode
            } else {
                prevNode!.setRightNode = newNode
            }
        }
    }

    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.addNode(5)
    binarySearchTree.addNode(7)
    binarySearchTree.addNode(6)
    binarySearchTree.addNode(4)
    console.log(binarySearchTree.travarsePreOrder());
}