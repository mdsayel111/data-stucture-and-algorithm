{

    // crete merge function
    const merge = <T>(arr1: T[], arr2: T[]) => {

        const resArr: T[] = []
        // create two pointer for two arr to determine how many element inserted in array after loop
        let leftArrPointer = 0
        let rightArrPointer = 0

        while (leftArrPointer < arr1.length && rightArrPointer < arr2.length) {
            // check least number, if arr1[leftPointer] is smaller than arr2[rightPointer], then increase left pointer value otherwise do opposite
            if (arr1[leftArrPointer] < arr2[rightArrPointer]) {
                resArr.push(arr1[leftArrPointer])
                leftArrPointer++;
            } else {
                resArr.push(arr2[rightArrPointer])
                rightArrPointer++
            }
        }




        // check which array element remain, and insert those elemts in resArr
        if (leftArrPointer < arr1.length) {
            // get remaining elements from arr1
            const remainArr = arr1.slice(leftArrPointer)
            resArr.push(...remainArr)
        } else {
            // get remaining elements from arr2
            const remainArr = arr2.slice(rightArrPointer)
            resArr.push(...remainArr,)
        }

        return resArr
    }
    // create merge sort function
    const mergeSort = <T>(arr: T[]): T[] => {

        // if number of element in arr is 1, hence return
        if (arr.length === 1) {
            return arr
        }


        // middle of arr
        const mid = Math.ceil(arr.length / 2)
        const leftArr = arr.slice(0, mid)
        const rightArr = arr.slice(mid, arr.length)

        // if number of elemen in arr is getter then 1, hence call merge fun recursilvely
        const leftMergedArr = mergeSort(leftArr)
        const rightMergedArr = mergeSort(rightArr)

        return merge(leftMergedArr, rightMergedArr)
    }

    console.log(mergeSort([1, 2, 34, 5, 90, 29, 76]))
}