/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftPtr = 0, rightPtr = s.length - 1;
    while (leftPtr < rightPtr) {
        [s[leftPtr], s[rightPtr]] = [s[rightPtr], s[leftPtr]];
        leftPtr++;
        rightPtr--;
    }
};
