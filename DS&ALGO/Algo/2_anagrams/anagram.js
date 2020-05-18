/** # Anagram's are the words having same character with same frequecy of character order can 
 * can be different.
 * ex- 
 * 1).teacher, cheater [a=1,c=1,e=2,h=1,t=1,r=1](teacher) = [a=1,c=1,e=2,h=1,t=1,r=1](cheater)
 * 2).abcd, dbca [a=1,b=1,c=1,d=1](abcd) = [a=1,b=1,c=1,d=1](dcba)
 */

 const isAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false;

    const freq1 = {};
    const freq2 = {};

    for(let char of str1) freq1[char] = (freq1[char] || 0) + 1; 
    for(let char of str2) freq2[char] = (freq2[char] || 0) + 1;

    console.log(freq1, freq2)

    for(let char in freq1) {
        if(freq1[char] !== freq2[char]) {
            return false;
        }
    }
    return true;
 };

 console.log(isAnagram('asf#', 'fsa#'));