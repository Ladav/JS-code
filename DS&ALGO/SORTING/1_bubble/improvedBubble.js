/** In the implementation we are maintaining a new var named "noswap", its values is being 
 * updated each time the a new iteration start's and set to true and inside the inner loop,
 * inside if (swap block) we are updating it's value to false, which simply mean's a swap is 
 * made and in case no swap is made in the whole iteration and its is result into a true 
 * then we stop the sorting process as the array is already fully sort (as no swap were made
 * in the last iteration).
*/
const bubble = (arr) => {
    const len = arr.length;
    let noswap;
    for(let i = 0; i < len - 1; i++) {
        noswap = true;
        for(let j = 0; j < len - (1+i); j++) {
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noswap = false;
            }
        }
        if(noswap) break;
    }
    return arr;
};

console.log(bubble([4,3,3,5,32,6,2,2,2,2,2,3443,6,43434,5,4]));