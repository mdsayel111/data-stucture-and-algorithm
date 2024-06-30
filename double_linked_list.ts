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
        // prev node getter function
        get getPrevNode() {
            return this.prevNode
        }
    }

    class LinkedList<T> {
        private head: Node<T> | null = null
        private currentNode: Node<T> | null = this.head

        // function for add new node in linked list
        addNode(data: T) {
            const node: Node<T> = new Node(data)

            // if head is null set new node to head
            // this block will work in the first time when linked list is empty
            // if (!this.head) {
            //     this.head = node
            // }

            // if currentNode is null set new node to head
            // this block will work in the first time when linked list is empty
            if (!this.currentNode) {
                this.head = node
                this.currentNode = node
            }

            // if current node is not null set new node to current node.next
            // this block will never work first time but before every time
            if (this.currentNode) {
                this.currentNode.setNextNode = node
                node.setPrevNode = this.currentNode
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
                this.head = this.head!.getNextNode
            }

            // if prevNode and currentNode isn't null means found the node which is not head node, then remove the Node
            if (prevNode && currentNode) {
                // remove the current node from double_linked_list
                prevNode.setNextNode = currentNode.getNextNode

                // set prevNode to nextNode.prevNode of currentNode.nextNode if currentNode.nextNode is exists
                if (currentNode.getNextNode) {
                    currentNode.getNextNode.setPrevNode = prevNode
                }
            }

        }

        // add a node to head
        prepend(param: T) {
            // creat new node by param
            const newNode = new Node(param)

            // check if head is null, then set newNode to head
            if (!this.head) {
                // set newNode to head
                this.head = newNode
                return
            }

            // set node.setNext = head cause new node will be head
            newNode.setNextNode = this.head

            // set new node to head
            this.head = newNode
        }

        // search node
        search(param: T) {
            // first time current node will be head
            let currentNode = this.head

            // the loop will be run untill current node.getNextNode !== null
            while (currentNode?.getNextNode) {

                // if currentNode.getNodeData === param, means this searchable item is found, then return the Data of current node
                if (currentNode.getNodeData === param) {
                    // return currentNode.getNodeData
                    return currentNode

                }

                // otherwise current node will be next node of current node
                currentNode = currentNode.getNextNode
            }
            return null
        }

        // add data after specific node
        insert(data: T, dataOfSpecificNode: T) {
            // creat newNode using data
            const newNode = new Node(data)

            // first time current node will be this.head
            let currentNode = this.head

            // first time prev node will be this.head
            // let prevtNode: Node<T> | null = null

            // the loop will be run untill the currentNode !== null
            while (currentNode?.getNextNode) {
                // check if currentNode.getNodeData === dataOfSpecificNode, means the specific node found, then add newNode after specificNode
                if (currentNode.getNodeData === dataOfSpecificNode) {
                    // set newNode after specific node
                    newNode.setNextNode = currentNode.getNextNode
                    newNode.setPrevNode = currentNode
                    currentNode.getNextNode.setPrevNode = newNode
                    return currentNode.setNextNode = newNode
                }

                currentNode = currentNode.getNextNode
            }

            // if this line exicute means specific node is not fount, then set the newNode as last node means set newNode to current node or this.head cause in this line current node will be the lastNode or there is no data in linked list

            // if this.head === null menas there is no data in the LinkedList, then set newNode to this.head
            if (!this.head) {
                return this.head === newNode
            }

            // if this line exicute, means current node is last node, then set newNode to currentNode.setNextNode 
            if (currentNode) {
                currentNode.setNextNode = newNode
                newNode.setPrevNode = currentNode
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
    linked_list.addNode(6)
    linked_list.addNode(4)
    linked_list.addNode(3)
    linked_list.addNode(2)
    linked_list.prepend(1)
    linked_list.insert(5, 6)
    linked_list.printLinkedList()
}