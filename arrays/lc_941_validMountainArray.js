/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;

    let i = 0;
    const n = arr.length;

    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n-1) return false;

    while (i + 1 < n && arr[i] > arr[i+1]) {
        i++;
    }

    return i === n-1;
};
