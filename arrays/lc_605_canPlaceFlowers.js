/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length;
    let i = 0;

    while (i < len) {
        const canPlant = flowerbed[i] === 0;
        if (!canPlant) {
            i += 2;
        } else if (i === len - 1 || flowerbed[i+1] === 0) {
            n--;
            i += 2;
        } else {
            i += 3;
        }
    }

    return n <= 0;
};
