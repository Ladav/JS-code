/** js got an inbuilt sort method on every array
 * NOTE- but this sort method use's unicode values to sort the elements, even if the elements
 * are integer's (it will first covert the number's to string and then it will sort.)
 * Syntax- arr.sort([compareFunction])
 * 
 * On MDN-
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 *  The default sort order is ascending, built upon converting the elements into strings,
 *  then comparing their sequences of UTF-16 code units values.
 * The time and space complexity of the sort cannot be guaranteed as it depends on the 
 *  implementation.
 * 
 * BUT - we can pass a compare fx to it
 * compareFunction (Optional)
 * Specifies a function that defines the sort order. If omitted, the array elements are
 *  converted to strings, then sorted according to each character's Unicode code point
 *  value.
 * firstEl-The first element for comparison.
 * secondEl-The second element for comparison.
 */

const cmpFx = (firstEl, secondEl) => {
    return firstEl - secondEl;
};

console.log([1,23,2,34,4,454,233,34,23].sort(cmpFx));


/**
if compareFunction is supplied, all non-undefined array elements are sorted according to the
return value of the compare function (all undefined elements are sorted to the end of the
array, with no call to compareFunction). If a and b are two elements being compared,
then:

->If compareFunction(a, b) returns less than 0, sort a to an index lower than b 
(i.e. a comes first).
->If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other,
but sorted with respect to all different elements. Note: the ECMAscript standard does not
guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at
least 2003) respect this.
->If compareFunction(a, b) returns greater than 0, sort b to an index lower than a 
(i.e. b comes first).
->If compareFunction(a, b) must always return the same value when given a specific pair of 
elements a and b as its two arguments. If inconsistent results are returned, then the
sort order is undefined.
 */