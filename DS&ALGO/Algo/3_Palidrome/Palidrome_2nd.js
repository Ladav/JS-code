((str) => {
    const length = str.length;

    for(let i = 0, j = length - 1; i < ((length / 2) >> 0) + 1; ++i, --j) {  // length=1 then ((1 / 2) >> 0) = 0
        if (str[i] !== str[j]) {
            console.log(`String[${i}]: ${str[i]} and String[${j}]: ${str[j]}`);
            return console.log('not a palidrome');
        }
    }
    return console.log('palidrome');
})('');