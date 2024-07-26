{
    class MinHeap<T> {
        private heap: T[]

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

        // this.heap getter method
        get getHeap() {
            return this.heap
        }

        // create setMinRoot method => {tc = O(1)}
        swapNode(arr: T[], firstNode: number, secondNode: number) {
            [arr[firstNode], arr[secondNode]] = [arr[secondNode], arr[firstNode]];
        }

        // create maxHipify method
        minHipify(arr: T[], rootNodeIndx: number, heapLength: number) {
            if (rootNodeIndx) {
                const smallestNodeIndex = this.getSmallestNodeIndx(arr, rootNodeIndx, heapLength)
                if (smallestNodeIndex) {
                    this.swapNode(arr, rootNodeIndx, smallestNodeIndex)
                    this.minHipify(arr, smallestNodeIndex, heapLength)
                }
            }
        }

        // get left node index method
        private getLeftNodeIndx(indxOfRoot: number) {
            return 2 * indxOfRoot
        }

        // get right node index method
        private getRightNodeIndx(indxOfRoot: number) {
            (2 * indxOfRoot) + 1
            return (2 * indxOfRoot) + 1
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

    const minHeap = new MinHeap([5, 10, 12, 7, 20, 30, 15])

    console.log(minHeap.sortByHeap([1, 2, 8, 4, 3, 10, 6, 17, 50]))
}