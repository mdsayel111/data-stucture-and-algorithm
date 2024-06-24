const bubble_sort = (arr: number[]) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }

    }
    return arr
}

console.log(bubble_sort([1,3,5,6,2,4]))