{
    class Node<T> {
        private data: T
        private leftNode: Node<T> | null = null
        private rightNode: Node<T> | null = null
        constructor(data: T) {
            this.data = data
        }
        // preveous node setter function
        set setLeftNode(node: Node<T> | null) {
            // this.prevNode = node
            this.leftNode = node
        }
        // next node setter function
        set setRightNode(node: Node<T> | null) {
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

        // create remove method
        remove(data: T) {
            let currentNode = this.head
            let prevNode: Node<T> | null = null

            let leftNodeOfData: Node<T> | null = null

            while (currentNode) {
                // if currentNode.getData === data, means found the node which will be romuve.then store left node of current node to leftNodeData.
                if (currentNode.getNodeData === data) {
                    leftNodeOfData = currentNode.getLeftNode
                    break
                }
                // else if current node data < data, means expected node can be rigth side of current node. then current node will be right node of current node 
                else if (currentNode.getNodeData < data) {
                    prevNode = currentNode
                    currentNode = currentNode.getRightNode
                }
                // otherwise expected node can be left side of current node. then current node will be left node of current node  
                else {
                    prevNode = currentNode
                    currentNode = currentNode.getLeftNode
                }

            }

            // if current node !== null, means expected node found. then remove the node.
            if (currentNode) {
                let newCurrentNode = leftNodeOfData
                // get biggest node from left side of current node
                while (newCurrentNode?.getRightNode) {
                    newCurrentNode = currentNode.getRightNode
                }

                // if newCurrent node exist, new current node is bigger node of current node left side.
                if (newCurrentNode) {
                    // if any node exist on currentNode.getRIghtNode
                    if (currentNode.getRightNode) {
                        // add right node of removal node to newCurrentNode.setRight
                        newCurrentNode.setRightNode = currentNode.getRightNode
                    }
                }
                // if newCurrent node === null, means there is no data in left side of current node. the set leftNode = currentNode.rightNode, because ultimately leftNode will be join with parent node 
                else {
                    leftNodeOfData = currentNode.getRightNode
                }

                // if prevNode === null, means the removal node is head node
                if (!prevNode) {
                    return this.head = leftNodeOfData
                }

                // check current node was left side or right side of its parent node
                if (currentNode.getNodeData > prevNode.getNodeData) {
                    prevNode.setRightNode = leftNodeOfData
                } else if (currentNode.getNodeData < prevNode.getNodeData) {
                    prevNode.setLeftNode = leftNodeOfData
                }
            }
        }

        // create search method
        search(data: T) {
            let currentNode = this.head
            while (currentNode) {
                // if currentNode.getNodeData === data, means node found
                if (currentNode.getNodeData === data) {
                    return currentNode.getNodeData
                }
                // if currentNode.getData > data, then currentNode will be currentNode.getLeftNode
                else if (currentNode.getNodeData > data) {
                    currentNode = currentNode.getLeftNode
                }
                // if currentNode.getData < data, then currentNode will be currentNode.getLeftNode
                else if (currentNode.getNodeData < data) {
                    currentNode = currentNode.getRightNode
                }
            }

            return null
        }
    }

    const binarySearchTree = new BinarySearchTree()
    binarySearchTree.addNode(5)
    binarySearchTree.addNode(10)
    binarySearchTree.addNode(11)
    binarySearchTree.addNode(12)
    binarySearchTree.addNode(7)
    binarySearchTree.addNode(8)
    binarySearchTree.addNode(4)
    binarySearchTree.addNode(3)
    binarySearchTree.addNode(2)
    binarySearchTree.addNode(1)
    binarySearchTree.remove(7)
    console.log(binarySearchTree.search(5))
    console.log(binarySearchTree.travarsePreOrder());
}