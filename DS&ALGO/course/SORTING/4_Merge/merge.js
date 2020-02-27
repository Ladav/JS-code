/** Divide Array into two parts util only one element left in the array recursively
 *  then two the two divide arrays from bottom toward's top.
 * 
 *              [3,2,1]-> len=3, mid=1, left=[3], right=[2,1]
 *                      /                            \
 *  [3]-> length=1 return [3]            [2,1]-> length=2 mid=1
 *                                          /               \
 *                                 [2] return [2]           [1] returns [1]
 * 
 *  merging of the above example will be like->
 *  [3,2,1]-> divide into [3],[2,1]
 * now [3] is sorted and can be merged with other part ex-[2,1]
 * before ""merge(left, right);"" 
 * we have to do ""right = mergeSort(arr.slice(mid, arr.length));""
 * but [2,1] is not sorted till now so will be sorted as [2],[1]
 * now we have [3,2,1]
 *              /   \
 *            [3]   [2,1]
 *                  /   \
 *                [2]   [1]
 * step 1) merge [3] with the array in the right; [3] and [2,1]
 * step 2) sort and merge [2,1] -> merge([2],[1]) -> [1,2]
 * step 3) merge([3],[1,2]) -> [1,2,3]
 */
const mergeSort = (arr) => {
    if (arr.length === 1) return arr;
    let mid = (arr.length / 2) | 0;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    return merge(left, right);
}

/**Merge two sorted arrays
 * ([1,5,7], [2,4,9]) -> [1,2,4,5,7,9]
 */
const merge = (arr1, arr2) => {
    let newArr = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
        else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

console.log(mergeSort([3, 7, 35, 53, 2, 3, 12, 3, 24324, 32, 4, 32]));