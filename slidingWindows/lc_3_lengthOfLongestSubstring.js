/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length;
    const hashStore = new Set();
    let res = 0;
    let leftPtr = 0, rightPtr = 0;
    while (rightPtr < n) {
        const currChar = s[rightPtr];

        while (hashStore.has(currChar)) {
            hashStore.delete(s[leftPtr]);
            leftPtr++;
            res = Math.max(res, rightPtr-leftPtr+1);
        }

        hashStore.add(currChar);
        rightPtr++;
    }
    res = Math.max(res, rightPtr-leftPtr);

    return res;
};

module.exports = {
    lengthOfLongestSubstring,
}
