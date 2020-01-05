const x = (a, b, c) => {
    return (a + b + c);
};

// currying
const y = x.bind(this, 1);
/** y = (b, c) => {
 *      return (1 + b + c);
 *  } 
 */

// currying
const z = y.bind(this, 1, 1, 2);
/** z = () => {
 *      return (1 + 1 + 1);
 *  } 
 */

const res = z(9, 9, 9);

console.log(res);