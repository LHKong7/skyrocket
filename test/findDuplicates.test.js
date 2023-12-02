const { describe, expect, test } = require('@jest/globals');
const { findDuplicates } = require('../arrays/lc_442_findDuplicates');

describe('findDuplicates', () => {
    test('returns the number show twice in a given number list', () => {
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toBe([2, 3]);
        expect(findDuplicates([1,1,2])).toBe([1]);
    });
});
