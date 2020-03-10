// NOTE- not in working condition

/** QuickSort -> [3,2,1,4]
 *          [3,2,1,4,5]
 *              3
 *        [2,1]   [4,5] 
 *         2        4
 *      [1]        [4] [5]
 *      1
 */

const partition = (arr, low = 0, high = arr.length-1) => {
    let i = low, j = high, mid = (low+high)/2|0;
    const pivot = arr[mid];

    while(i < mid && j > mid) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }

        if(i < mid && j > mid) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[mid], arr[j]] = [arr[j], arr[mid]];

    console.log(arr, mid)
    // return mid;
};

let arr = [3,2,1,4,345,345,45,3454 ];
console.log(partition([1,3,23,45,4,55,0]));