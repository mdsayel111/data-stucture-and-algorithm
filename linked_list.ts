{
    class Node<T> {
        private data: T
        private prevNode: Node<T> | null = null
        private nextNode: Node<T> | null = null
        constructor(data: T) {
            this.data = data
        }
        // preveous node setter function
        set setPrevNode(node: Node<T> | null) {
            // this.prevNode = node
            this.prevNode = node
        }
        // next node setter function
        set setNextNode(node: Node<T> | null) {
            this.nextNode = node
        }
        // node data getter function
        get getNodeData() {
            return this.data
        }
        // next node getter function
        get getNextNode() {
            return this.nextNode
        }
    }

    class LinkedList<T> {
        private head: Node<T> | null = null
        private currentNode: Node<T> | null = null

        // function for add new node in linked list
        addNode(data: T) {
            const node: Node<T> = new Node(data)

            // if head is null set new node to head
            // this block will work in the first time when linked list is empty
            if (!this.head) {
                this.head = node
            }

            // if head is null set new node to head
            // this block will work in the first time when linked list is empty
            if (!this.currentNode) {
                this.currentNode = node
            }

            // if current node is not null set new node to current node.next
            // this block will never work first time but before every time
            if (this.currentNode) {
                this.currentNode.setNextNode = node
                this.currentNode = node
            }

        }

        // remove node from linked list
        removeNode(param: T) {

            // find node which data is match with param and store it in currentNode, otherwise currentNode will be null
            let currentNode = this.head
            let prevNode: Node<T> | null = null
            while (currentNode) {
                // break if found node which match with param
                if (currentNode.getNodeData === param) {
                    break
                }
                prevNode = currentNode
                currentNode = currentNode.getNextNode

            }

            // if prevNode is null means first node data match with param, then set head to the next node of current head
            if (!prevNode) {
                this.head = this.head?.getNextNode as Node<T>
            }

            // if prevNode and currentNode isn't null means found the node which is not head node, then remove the Node
            if (prevNode && currentNode) {
                prevNode.setNextNode = currentNode.getNextNode

            }

        }

        // function for print add data in linked list
        printLinkedList() {
            let node = this.head

            // travarse whole linked list
            while (node) {
                console.log((node as Node<number>).getNodeData)
                node = node.getNextNode
            }

        }

    }

    const linked_list = new LinkedList<number>()
    linked_list.addNode(5)
    linked_list.addNode(4)
    linked_list.addNode(3)
    linked_list.addNode(2)
    linked_list.removeNode(4)
    linked_list.printLinkedList()
}