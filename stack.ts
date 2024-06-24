class Stack<T> {
    readonly stackLength: number
    readonly stack: T[] = []
    constructor(length: number) {
        this.stackLength = length
    }
    getLength() {
        return this.stack.length
    }
    add(element: T) {
        if (this.getLength() === this.stackLength) {
            return console.log("Stack overflow")
        }
        this.stack.push(element)
        return this.stack
    }
    remove() {
        if (this.getLength() === 0) {
            return console.log("Stack underflow")
        }
        this.stack.pop()
        return this.stack
    }
}
const stack = new Stack<number>(5)

console.log(stack.add(3))
console.log(stack.add(4))
console.log(stack.add(5))
console.log(stack.add(6))
console.log(stack.add(7))
console.log(stack.remove())
console.log(stack.add(7))