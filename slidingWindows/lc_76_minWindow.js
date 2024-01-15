/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const sLen = s.length;
    const tLen = t.length;

    if (tLen > sLen) return '';

    const currStore = new Map();
    const macthedStore = new Map();

    for (let i = 0; i < tLen; i++) {
        let currChar = t[i];
        if (macthedStore.get(currChar)) {
            macthedStore.set(currChar, macthedStore.get(currChar) + 1)
        } else {
            macthedStore.set(currChar, 1);
        }
    }

    let leftPtr = 0, rightPtr = 0;
    let resL = 0, resR = 0;
    let currLen = Number.MAX_SAFE_INTEGER;
    while (rightPtr < sLen) {
        let currChar = s[rightPtr];
        if (currStore.get(currChar)) {
            currStore.set(currChar, currStore.get(currChar) + 1)
        } else {
            currStore.set(currChar, 1);
        }

        while (compareMap(currStore, macthedStore)) {
            if (rightPtr - leftPtr + 1 < currLen) {
                currLen = rightPtr - leftPtr + 1
                resL = leftPtr;
                resR = rightPtr + 1;
            }
            currStore.set(s[leftPtr], currStore.get(s[leftPtr]) - 1);
            leftPtr++;
        }

        rightPtr++;
    }
    return resR === 0 ? "" : s.slice(resL, resR);;
};

const compareMap = (map1, map2) => {
    if (map1.size < map2.size) return false;

    for (let [k, v] of map2) {
        let mapVal = map1.get(k);

        if (mapVal < v || mapVal === undefined) {
            return false;
        }
    }

    return true;
}
