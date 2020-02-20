const selection = (arr) => {
    const len = arr.length;
    let minIndex;

    for(let i = 0; i < len-1; i++) {
        minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[minIndex] > arr[j]) minIndex = j;
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

console.log(selection([4,3,3,5,32,6,2,2,2,2,2,3443,6,43434,5,4]));