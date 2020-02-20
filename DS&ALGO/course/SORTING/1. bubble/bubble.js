const bubble = (arr) => {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j+1])
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
    return arr;
}

console.log(bubble([4,3,3,5,32,6,2,2,2,2,2,3443,6,43434,5,4]))