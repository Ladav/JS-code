// Note- note working 

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
} 
const partition = (arr, low, high) => {
    const mid = (low + high) / 2 | 0;
    const pivot = arr[mid];
    let i = low, j = high;
    
    while(i < j ) {
        while(arr[i] < pivot){
            i++;
        }
        while(arr[j] > pivot) j--;
        if(i < j) swap(arr, i, j);
    }
    swap(arr, j, mid);
    
    return j;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if(low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex-1);
        quickSort(arr, pivotIndex+1, high);
    }
    return arr;
}

let arr = [];
for(let i = 0; i < 10; i++) {  // array generater
    arr.push(~~(Math.random() * 101));
}
console.log(quickSort([...arr]));