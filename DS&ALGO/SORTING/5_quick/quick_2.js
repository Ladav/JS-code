/**
 * QuickSort use the divide and conquer approach to sort the array same as mergesort but it do not 
 * create new smaller array to sort them but instead pass a reference of the original array to
 * it's utility fx. It maintain pointer's(low(start),high(end)) to a part of a array, which is
 * assumed to be divided from the array, so that they can be sorted.
 * 
 * partition fx->
 * NOTE- in this particular program we are assuming the pivot will be the first element always,
 * but it is not the best approach and this algo can be optimized by choosing the pivot carefully
 * check quick_optimized.
 * In partition we get the array and low(starting pointer) and high(pointer to the last element in
 * the current(the assumed or divided array)) and return the index of pivot (where it is placed
 * now in the array "pivot is sorted now")
 * Inside the patition algo we have implemented two loops-
 * first->
 * do{ 
 *      i++;
 * } while(arr[i] < pivot); 
 * do while so we can start comparing from the second element in the array directly,
 * we maintain two pointer i and j,
 * i->it increases   &   j-> decrease
 * in the above loop we try to find a greater or larger number than the pivot element.
 * when we found one loop ends and second loop executes
 * while(arr[j] > pivot) { 
 *      j--; 
 * }
 * here we are starting from the end of the array towards beginning, now we are looking for an
 * element smaller than the pivot, if we get one we swap it with the j'th element.
 * 
 * and in the end we swap the pivot element with j'th element as it is the correct position for the
 * pivot after we get out of the parent while loop.
 * 
 * quickSort->
 * it is just finding the pivot and logically dividing the array into two part by passing new low 
 * and high index for the array and recursively calling itself and sort the data by sorting
 * the pivot element each time.
 */
const quickSort = (arr, low = 0, high = arr.length-1) => {
    if(low < high) {
        const j =partition(arr, low, high);
        quickSort(arr, low, j-1);
        quickSort(arr, j+1, high);
    }

    return arr;
};

const partition = (arr, low = 0, high = arr.length-1) => {
    let i = low, j = high;
    const pivot = arr[low];

    while(i<j) {
        do{
            i++;
        } while(arr[i] < pivot);  // assuming the pivot as the first will always ex-low
        
        while(arr[j] > pivot) {
            j--;
        } 
    
        if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]];    // swapping elements at i and j
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
//     console.log(arr)
    return j; //j will be the postion where the partition should occur
};

let arr = [];
for(let i = 0; i < 100; i++) {  // array generater
    arr.push(~~(Math.random() * 101));
}
console.log(arr);
console.log(quickSort([...arr]));