const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) % Math.pow(10, place) / Math.pow(10, place-1));
};

// console.log(getDigit(1234, 3));

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// console.log(digitCount(33452));

const mostDigits = (arr) => {
    let maxDigit = 0;
    arr.forEach(el => {
        let digits = digitCount(el);
        if(digits > maxDigit) maxDigit = digits;
    });
    return maxDigit;
};

// console.log(mostDigits());

const radixSort = (arr) => {
    const maxDigitCount = mostDigits(arr);
    for(let i = 1; i <= maxDigitCount; i++) {
        const backet = [];
        const base = 10; // so we can have digits starting from 0 to 9
        for(let j = 0; j < base; j++) backet.push([]);

        for(let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            backet[digit].push(arr[j]);
        }
        console.log(backet);
        arr = [].concat(...backet);
    }
    console.log(arr)
};

let arr = [];
let size = 10;
for(let i = 0; i < size; i++) {  // array generater
    arr.push(~~(Math.random() * (size+1)));
}
console.log(radixSort(arr));