const freqCounter = (arr1, arr2) => {
    let obj1 = {};
    let obj2 = {};

    for(let val of arr1) {
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for(let val of arr2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for(let key in obj1) {
        if(!(key ** 2 in obj2)) {
            return false;
        }
        if(obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;
};

console.log(freqCounter([1,2,3,3],[1,4,9,9]));