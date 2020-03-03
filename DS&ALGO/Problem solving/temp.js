function verifyAge(age) {
    if(age < 0) console.log('error');
    if(age === 21) console.log('happy 21st b\'day');
    if(age % 2 !== 0) console.log('age is off');
    for(let i = 0; i < age; i++) {
        if(Math.pow(i,2) === age) console.log('age is perfect square')
    }
};

verifyAge(49);
