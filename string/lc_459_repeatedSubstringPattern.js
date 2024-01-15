/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;

    for (let len = 1; len <= Math.floor(n / 2); len++) {
        if (n % len === 0) {
            let match = true;
            
            for (let i = len; i < n; i++) {
                if (s[i] !== s[i - len]) {
                    match = false;
                    break;
                }
            }

            if (match) return true;
        }
    }

    return false;
};