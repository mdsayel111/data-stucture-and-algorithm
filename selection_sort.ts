const selection_sort = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowestIndx = i
        let lowestNum = arr[i]
        for (let j = 0; j < arr.length; j++) {
            let element = arr[j]
            if (element < lowestNum) {
                lowestIndx = j
            }
        }
        [arr[lowestIndx], arr[i]] = [arr[i], arr[lowestIndx]]

    }
    return arr
}

console.log(selection_sort([1,3,2,4,6,5]))