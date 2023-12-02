/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let res = '';
    const alphabetStore = new Array(26).fill(0);

    for (const char of s) {
        alphabetStore[char.charCodeAt() - 'a'.charCodeAt()]++;
    }

    while (res.length < s.length) {
        for (let i = 0; i < 26; i++) {
            if (alphabetStore[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                alphabetStore[i]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            if (alphabetStore[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt());
                alphabetStore[i]--;
            }
        }
    }

    return res;
};
