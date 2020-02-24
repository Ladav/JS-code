/**[5,_2,1,4,3](assuming 5 is sorted so start from second element ex-2) check where 2
 * fit's in the sorted part (which is consist of 5 only right now.)
 * now check where to place 2 -> 5>2 yes so place 2 before 5.
 * [2,5,_1,4,3] ([2,5] are sorted, now sort the next item eg 1)
 * first we compare 5>1 yes then 2>1 yes then move 1 at first position
 * [1,2,5_4,3] ([1,2,5] is sorted)
 * now sort 4 -> 5>4 yes then 2>4 no So
 * [1,2,4,5,_3] and so on
 */

 const insertionSort = (arr) => {
    let curEl;
    for(let i = 1; i < arr.length; i++) {
        curEl = arr[i];
        for(j = i - 1; j >= 0 && arr[j] > curEl; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = curEl;
    }
    return arr;
 };

 console.log(insertionSort([5,2,1,4,3]));