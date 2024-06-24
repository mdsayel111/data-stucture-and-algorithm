const lenearSearch = (arr: number[], searchNum: number) => {
    let num: null | number = null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNum) {
            num = i
            break
        }
    }
    return num
}
console.log(lenearSearch([1, 2, 3, 4], 4))