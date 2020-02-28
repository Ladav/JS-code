/** QuickSort -> [3,2,1,4]
 *          [3,2,1,4,5]
 *              3
 *        [2,1]   [4,5] 
 *         2        4
 *      [1]        [4] [5]
 *      1
 */

const pivot = (arr, start = 0, end = arr.length - 1) => {
    console.log(arr, start, end)
    let pivot = arr[start]; // assuming first element as pivot
    let counter = 0;    // counter maintain record of the number of elemet smaller than the pivot
    // find the number of elements smaller than pivot
    for(let i = start+1; i <= end; i++) {
        if(arr[i] < pivot) {
            counter++;
            // if(counter !== i) {
                [arr[counter], arr[i]] = [arr[i], arr[counter]]; // swaping the elements
            
        }
    };
    
    [arr[0], arr[counter]] = [arr[counter], arr[0]]; // swapping pivot with the last element smaller than
    console.log(counter)
    return counter; // counter is the index of pivot right now
};

const quickSort = (arr,start = 0, end = arr.length - 1) => {
    if(start < end) {
        // get the pivot
        let pivotIndex = pivot(arr, start, end);
        // for left
        quickSort(arr, start, pivotIndex-1);
        // for right
        quickSort(arr, pivotIndex+1, end);
    }
    return arr;
}

let arr = [3,2,1,4,345,345,45,3454 ];
console.log(quickSort(arr));