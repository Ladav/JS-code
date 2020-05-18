/** https://www.hackerrank.com/challenges/strange-advertising/problem?h_r=internal-search */

function viralAdvertising(n) {
    let likes = 0, shared = 5;
    for(let i = 1; i <= n; i++) {
        likes = likes + Math.floor(shared / 2);
        shared = Math.floor(shared / 2) * 3; 
    }
    
    return likes;
};

console.log(viralAdvertising(3));