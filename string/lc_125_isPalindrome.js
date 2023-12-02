/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const n = s.length;
    let leftPtr = 0, rightPtr = n - 1;
    while (leftPtr < rightPtr) {
        while (leftPtr < rightPtr && !isValidChar(s[leftPtr])) {
            leftPtr++;
        }

        while (leftPtr < rightPtr && !isValidChar(s[rightPtr])) {
            rightPtr--;
        }

        if (leftPtr < rightPtr) {
            if (s[leftPtr].toLowerCase() !== s[rightPtr].toLowerCase()) {
                return false;
            }
            leftPtr++
            rightPtr--
        }
    }

    return true;
};

const isValidChar = (ch) => {
    return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')
}
