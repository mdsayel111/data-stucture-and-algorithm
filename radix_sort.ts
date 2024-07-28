{
    // create get digit function
    const getDigit = (num: number, place: number) => {
        return Math.floor(num / Math.pow(10, place)) % 10
    }

    // create get most digit function
    const mostDigit = (arr: number[]) => {
        const maxNum = Math.max(...arr)
        if (maxNum === 0) {
            return 1
        }
        return Math.ceil(Math.log10(maxNum))
    }

    const radixSort = (arr: number[]) => {
        // get height digit for sort by digit
        const heightDigit = mostDigit(arr)

        for (let i = 0; i < heightDigit; i++) {
            // create an array of 10 empty array for bucket
            const bucket: number[][] = Array.from({ length: 10 }, () => [])
            for (let num of arr) {
                const digit = getDigit(num, i)
                bucket[digit].push(num)
            }
            arr = ([] as number[]).concat(...bucket)
        }
        return arr
    }

    console.log(radixSort([1, 5, 7, 23, 566, 72]))
}