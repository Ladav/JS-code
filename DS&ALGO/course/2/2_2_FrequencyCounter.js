const frequencyCount = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2);
        if (index === -1) {
            return false;
        }
        arr2.splice(index, 1);
    }
    return true;
};
let res = frequencyCount([1,2,1,1,2,1],[1,1,4,1,4,1]);
console.log(res);