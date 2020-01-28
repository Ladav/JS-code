const isValidAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }

    let strObj1 = {};
    let strObj2 = {};
    
    for(let char of str1) {
        strObj1[char] = (strObj1[char] || 0) + 1;
    }
    for(let char of str2) {
        strObj2[char] = (strObj2[char] || 0) + 1;
    }
    
    // if char exist in both the objects and with same count
    for(let key in strObj1) {
        if(!(key in strObj2)) {
            return false;
        }
        if(strObj1[key] !== strObj2[key]) {
            return false;
        }
    }

    return true;
};

console.log(isValidAnagram('abcd', 'bcab'));