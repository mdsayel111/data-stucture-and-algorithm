{
    class MinHeap<T> {
        protected heap: T[]

        constructor(arr: T[]) {
            const newArr = this.buildMinHeap([null as T, ...arr])
            this.heap = newArr
        }

        // creat buildMinHeap method
        buildMinHeap(arr: T[]) {
            const newArr = arr
            // build mmin heap
            let i = Math.floor((newArr.length - 1) / 2)
            for (i; i >= 1; i--) {
                this.minHipify(newArr, i, newArr.length)
            }
            return newArr
        }

        // create setMinRoot method => {tc = O(1)}
        protected swapNode(arr: T[], firstNode: number, secondNode: number) {
            // TODO: swap by following technique =>
            [arr[firstNode], arr[secondNode]] = [arr[secondNode], arr[firstNode]];
        }

        // create maxHipify method
        protected minHipify(arr: T[], rootNodeIndx: number, heapLength: number) {
            if (rootNodeIndx) {
                const smallestNodeIndex = this.getSmallestNodeIndx(arr, rootNodeIndx, heapLength)
                if (smallestNodeIndex) {
                    this.swapNode(arr, rootNodeIndx, smallestNodeIndex)
                    this.minHipify(arr, smallestNodeIndex, heapLength)
                }
            }
        }

        // this.heap getter method
        get getHeap() {
            return this.heap
        }

        // get left node index method
        private getLeftNodeIndx(indxOfRoot: number) {
            return 2 * indxOfRoot
        }

        // get left node method
        private getLeftNode(indxOfRoot: number) {
            const leftNodeIndx = this.getLeftNodeIndx(indxOfRoot)
            return this.heap[leftNodeIndx]
        }

        // get right node index method
        private getRightNodeIndx(indxOfRoot: number) {
            (2 * indxOfRoot) + 1
            return (2 * indxOfRoot) + 1
        }

        // get right node method
        private getRightNode(indxOfRoot: number) {
            const rightNodeIndx = this.getRightNodeIndx(indxOfRoot)
            return this.heap[rightNodeIndx]
        }

        // parent node index getter method
        protected getParentNodeIndx(indxOfChild: number) {
            const parentNodeIndx = Math.floor(indxOfChild / 2)
            return parentNodeIndx > 0 ? parentNodeIndx : 0
        }

        // parent node getter function
        private getParentNode(indxOfChild: number) {
            const parentNodeIndx = this.getParentNodeIndx(indxOfChild)
            return this.heap[parentNodeIndx]
        }

        // create getSmallestNodeIndx method
        private getSmallestNodeIndx = (arr: T[], rootNodeIndx: number, heapLength: number) => {

            // get root node
            let rootNode = arr[rootNodeIndx]

            // get left index of rootNode left child
            const leftNodeIndx = this.getLeftNodeIndx(rootNodeIndx)

            // get right index of rootNode right child
            const rightNodeIndx = this.getRightNodeIndx(rootNodeIndx)

            // get right node of rootNode
            const leftNode = leftNodeIndx <= heapLength ? arr[leftNodeIndx] : null

            // get left node of rootNode
            const rightNode = rightNodeIndx <= heapLength ? arr[rightNodeIndx] : null

            // smaller node index's variable
            let smallerNodeIndex: number | null = null;

            // check which node is smaller, and set that node to rootNode
            if (leftNode && leftNode < rootNode) {
                smallerNodeIndex = leftNodeIndx
                rootNode = leftNode
            }
            if (rightNode && rightNode < rootNode) {
                smallerNodeIndex = rightNodeIndx
            }

            return smallerNodeIndex && smallerNodeIndex > heapLength ? null : smallerNodeIndex
        }

        // create sortByHeap method
        sortByHeap(arr: any) {
            // build min heap by arr
            const newArr = this.buildMinHeap([null, ...arr])
            let heapLength = newArr.length

            for (let i = heapLength - 1; i > 1; i--) {
                // swap node
                this.swapNode(newArr, 1, i)
                this.minHipify(newArr, 1, i - 1)
            }

            return newArr

        }
    }

    // create priority queue class
    class PriorityQueue<T> extends MinHeap<T> {
        private priorityQueue: T[]
        constructor(arr: T[]) {
            super(arr)
            this.priorityQueue = this.heap
        }

        // priority queue getter method
        get getQueue() {
            return this.priorityQueue
        }

        // create extract method
        extact() {
            // swap 1st element with last element
            this.swapNode(this.priorityQueue, 1, this.priorityQueue.length - 1)

            // delete the last element
            this.priorityQueue.pop()

            // set the 1st element to appropiate place by max hipify
            this.minHipify(this.priorityQueue, 1, this.priorityQueue.length)
        }

        // create insert method
        insert(data: T) {
            this.priorityQueue.push(data)

            // 1st time child will be last element of priority queue
            let childIndx = this.priorityQueue.length - 1

            // 1st time parent will be parent of last element
            let parentIndx = this.getParentNodeIndx(childIndx)



            // console.log(this.priorityQueue[childIndx] < this.priorityQueue[parentIndx])

            while (parentIndx > 0 && this.priorityQueue[childIndx] < this.priorityQueue[parentIndx]) {
                // swap child and pparent node
                this.swapNode(this.priorityQueue, parentIndx, childIndx)

                // set childIndx node parentIndx, because parent of current parentIndx may be smaller than current child 
                childIndx = parentIndx

                // set parentIndx current child parrent index
                parentIndx = this.getParentNodeIndx(childIndx)

            }
        }

        // create increase method
        decrease(indx: number, data: T) {

            this.priorityQueue[indx] = data

            // 1st time child will be last element of priority queue
            let childIndx = indx

            // 1st time parent will be parent of last element
            let parentIndx = this.getParentNodeIndx(childIndx)



            // console.log(this.priorityQueue[childIndx] < this.priorityQueue[parentIndx])

            while (parentIndx > 0 && this.priorityQueue[childIndx] < this.priorityQueue[parentIndx]) {
                console.log(this.priorityQueue[childIndx], this.priorityQueue[parentIndx])
                // swap child and pparent node
                this.swapNode(this.priorityQueue, parentIndx, childIndx)

                // set childIndx node parentIndx, because parent of current parentIndx may be smaller than current child 
                childIndx = parentIndx

                // set parentIndx current child parrent index
                parentIndx = this.getParentNodeIndx(childIndx)

            }
        }
    }

    // const priorityQueue = new PriorityQueue([5, 10, 12, 7, 20, 30, 15])
    const priorityQueue = new PriorityQueue([8, 20, 6, 40, 50])

    // priorityQueue.extact()
    // priorityQueue.insert(5)
    // priorityQueue.decrease(5, 5)
    console.log(priorityQueue.getQueue)
}