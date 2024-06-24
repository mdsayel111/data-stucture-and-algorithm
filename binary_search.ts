const binarySearch = (arr: number[], searchNum: number) => {
    let r = arr.length - 1
    let l = 0
    while (l <= r) {
        let m = Math.floor((r + l) / 2)
        if (arr[m] === searchNum) {
            return m
        }
        else if (arr[m] > searchNum) {
            r = m - 1
        } else if (arr[m] < searchNum) {
            l = m + 1
        }

    }
    return null
}
console.log(binarySearch([10, 20, 30, 40], 4))