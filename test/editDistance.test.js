const { minDistance } = require('../dynamic_programming/lc_72_editDistance.js');

describe('minDistance', () => {
    it('returns 0 for identical words', () => {
        expect(minDistance('abc', 'abc')).toBe(0);
    });

    it('returns the correct distance for different words', () => {
        expect(minDistance('abc', 'def')).toBe(3);
        expect(minDistance('kitten', 'sitting')).toBe(3);
        expect(minDistance('intention', 'execution')).toBe(5);
    });

    it('returns the correct distance for words of different lengths', () => {
        expect(minDistance('abc', 'abcd')).toBe(1);
        expect(minDistance('abcd', 'abc')).toBe(1);
        expect(minDistance('abc', 'defg')).toBe(4);
        expect(minDistance('defg', 'abc')).toBe(4);
    });
});