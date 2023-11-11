const { rotate } = require('../arrays/lc_189_rotateArray.js');

test('rotateArray', () => {
    expect(rotate([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4]);
})
