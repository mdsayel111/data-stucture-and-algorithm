class Queue<T> {
    readonly queueLength: number
    readonly queue: T[] = []
    private pointer: number = 0
    constructor(length: number) {
        this.queueLength = length
    }
    getLength() {
        return this.queue.length
    }
    add(element: T) {
        if (this.getLength() === this.queueLength) {
            return console.log("Queue overflow")
        }
        this.queue.push(element)
        this.pointer = this.queue.length % this.queueLength
        return this.queue
    }
    remove() {
        if (this.getLength() === 0) {
            return console.log("Stack underflow")
        }
        this.queue.shift()
        this.pointer = this.queue.length % this.queueLength
        return this.queue
    }
}

const queue = new Queue<number>(5)

console.log(queue.add(2))
console.log(queue.add(5))
console.log(queue.add(5))
console.log(queue.add(5))
console.log(queue.add(5))
console.log(queue.remove())
console.log(queue.add(4))