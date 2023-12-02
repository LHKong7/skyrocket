/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    if (s.length < k) return 0;
    const hashStore = new Set();
    let res = 0;
    let left = 0, right = 0;
    while (right < s.length) {
        let currChar = s[right];

        while (hashStore.has(currChar)) {
            hashStore.delete(s[left]);
            left++;
        }
        hashStore.add(currChar);
        if (hashStore.size == k) {
            res++; 
            hashStore.delete(s[left]);
            left++;
        }
        right++;
    }

    return res;
};
