/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        let arr = Array.from(str);
        arr.sort();
        let key = arr.toString();
        let list = map.has(key) ? map.get(key) : [];
        list.push(str);
        map.set(key, list);
    }

    return Array.from(map.values());
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashStore = new Map();

    for (const str of strs) {
        const count = new Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt() - 'a'.charCodeAt()]++;
        }
        const key = count.toString();

        hashStore.has(key) ? hashStore.get(key).push(str) : hashStore.set(key, [str]);
    }

    return Array.from(hashStore.values());
};

