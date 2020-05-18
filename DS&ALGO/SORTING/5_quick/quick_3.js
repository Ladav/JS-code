/** 
 * [1,3,4,2,5,6,0];
 */

const quickSort = (arr, low = 0, high = arr.length-1) => {
    if(low < high) {
        let p_index = partition(arr, low, high);
        console.log(p_index)
        quickSort(arr, low, p_index-1); 
        quickSort(arr, p_index+1, high); 
    }
    return arr;
};

const partition = (arr, low = 0, high = arr.length-1) => {
    const p = arr[high];
    let p_index = low;

    for(let i = 0; i < high; i++) {
        if(arr[i] <= p) {
            [arr[p_index], arr[i]] = [arr[i], arr[p_index]];
            p_index++;
        }
    }
    [arr[p_index], arr[high]] = [arr[high], arr[p_index]];

    return p_index;
};

console.log(partition([1,3,4,2,5,6,0]));