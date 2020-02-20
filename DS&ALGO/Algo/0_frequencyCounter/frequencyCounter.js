const freqCounter = (arr) => {
    const freq = {};
    for(let el of arr) {
        freq[el] = (freq[el] || 0) + 1;
    };
    return freq;
};

console.log(freqCounter('abcddeedsjfhjdbhjdhks'));