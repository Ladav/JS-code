/**             #
 *             # #      (there is space bt the two #)
 *            # # #
 *           # # # #
 *          # # # # #
 *         # # # # # #
 */

const pattern = (lines) => {
    let str = '';
    let charNum = lines + 1;;
    for(let i = 1; i <= lines ; i++) {
        for(let j = i+1; j <= lines ; j++) {
            str = str + ' ';
        }

        k = charNum; 
        while (k > lines ) {
            if(lines % 2 === 0) {
                if(k % 2 !== 0) str = str + '#';
                else str = str + ' '; 
            }
            if(lines % 2 !== 0) {
                if(k % 2 !== 0) str = str + ' ';
                else str = str + '#';
            }
            k--;
        }
        charNum = charNum + 2;

        for(let j = i+1; j <= lines ; j++) {
            str = str + ' ';
        }
        console.log(str);
        str = '';
    }
};

pattern(40);