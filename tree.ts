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

    // travarse tree in pre order
    const travarsePreOrder = <T>(node: Node<T>) => {
        // travarse element list
        const nodeList: T[] = []

        // creat function for travarse tree recursively
        const preOrder = (node: Node<T>) => {
            // add node.getData to nodeList
            nodeList.push(node.getNodeData)

            // if node.getLeftNode !== null, then travarse the subtree consider the root node is node.getLeftNode
            if (node.getLeftNode) {
                preOrder(node.getLeftNode)
            }
            // if node.getRighttNode !== null, then travarse the subtree consider the root node is node.getRighttNode
            if (node.getRightNode) {
                preOrder(node.getRightNode)
            }
        }
        preOrder(node)
        return nodeList
    }

    const travarseInOrder = <T>(node: Node<T>) => {
        // travarse element list
        const nodeList: T[] = []

        // creat function for travarse tree recursively
        const preOrder = (node: Node<T>) => {

            // if node.getLeftNode !== null, then travarse the subtree consider the root node is node.getLeftNode
            if (node.getLeftNode) {
                preOrder(node.getLeftNode)
            }

            // add node.getData to nodeList
            nodeList.push(node.getNodeData)

            // if node.getRighttNode !== null, then travarse the subtree consider the root node is node.getRighttNode
            if (node.getRightNode) {
                preOrder(node.getRightNode)
            }
        }
        preOrder(node)
        return nodeList
    }

    const travarsePostOrder = <T>(node: Node<T>) => {
        // travarse element list
        const nodeList: T[] = []

        // creat function for travarse tree recursively
        const preOrder = (node: Node<T>) => {

            // if node.getLeftNode !== null, then travarse the subtree consider the root node is node.getLeftNode
            if (node.getLeftNode) {
                preOrder(node.getLeftNode)
            }

            // if node.getRighttNode !== null, then travarse the subtree consider the root node is node.getRighttNode
            if (node.getRightNode) {
                preOrder(node.getRightNode)
            }

            // add node.getData to nodeList
            nodeList.push(node.getNodeData)
        }
        preOrder(node)
        return nodeList
    }


    const one = new Node(1)
    const two = new Node(2)
    const three = new Node(3)
    const four = new Node(4)
    one.setRightNode = two
    one.setLeftNode = three
    three.setLeftNode = four

    console.log(travarsePreOrder(one));
    console.log(travarseInOrder(one));
    console.log(travarsePostOrder(one));

}