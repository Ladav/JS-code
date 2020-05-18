/**
 * # stable number are those number who have same occuring freqency for each digit in the number
 * ex- 1). 12345-occuring freq 1
 *     2). 11112233- freq 2 pairs will be 11-11-22-33
 *     3). 345345- freq 2 pairs 33-44-55
 * 
 * # unstable is just opposite of stable.
 */

 const isStable = (num) => {    //expecting a whole number
    const freq = {};
    let rem;
    let stable = true;

    while(num >= 1) {
        rem = num % 10;
        freq[rem] = (freq[rem] || 0) + 1;
        num = Math.floor(num / 10);
    }

    for(let num in freq) {
        if(freq[num] % 2 !== 0) {
            stable = false;
        }
    }
    console.log(freq)
    return stable;
 };

 console.log(isStable(1232234));