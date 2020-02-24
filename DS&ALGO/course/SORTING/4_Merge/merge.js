const mergeSort = (arr) => {
    // divide the array in two parts util only 1 element left's in it
    let len = arr.length;
    let mid;
    let right = [], left = [];
    if (len > 1) {
        mid = (len / 2)|0;
        left = arr.slice(0, mid);
        left = mergeSort(left);
        right = arr.slice(mid, len);
        right = mergeSort(right);
        return merge(left, right);
    }
    return arr;
}
/**
 *  [3,2,1]-> len=3, mid=1, left=[3], right=[2,1]
 *      /                                  \
 *  [3]-> length=1 return [3]            [2,1]-> length=2 mid=1
 *                                          /               \
 *                                 [2] return [2]           [1] returns [1]
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

console.log(mergeSort([3, 7, 35, 53, 2, 3,12,3,24324,32,4,32]));