const insertion_sort = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        let currentNum = arr[i]
        // for (let j = i - 1; j >= 0; j--) {
        //     if (currentNum < arr[j]) {
        //         arr[j + 1] = arr[j]
        //     } else if (currentNum > arr[j]) {
        //         arr[j + 1] = currentNum
        //         break
        //     }
        //     if (j === 0) {
        //         arr[j] = arr[i]
        //     }
        // }
        let j = i - 1
        while (j >= 0 && arr[j] > currentNum) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = currentNum
    }
    return arr
}

console.log(insertion_sort([1, 4, 3, 2, 5]))