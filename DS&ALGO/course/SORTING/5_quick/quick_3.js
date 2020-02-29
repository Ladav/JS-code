const partition = (arr, low = 0, high = arr.length - 1) => {
    let mid = (low + high) / 2 | 0;
    const pivot = arr[mid];
    let i = low, j = high;

    while(i < j) {
        while(arr[i] < pivot && i < mid-1) i++;
        while(arr[j] > pivot && j > mid+1) j--;
        if(i < j) [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    [arr[mid], arr[i]] = [arr[i], arr[mid]];
    console.log(i)
    return i;
};

console.log(partition([3, 1, 2]));