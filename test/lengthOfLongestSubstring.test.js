const { describe, expect, test } = require('@jest/globals');
const { lengthOfLongestSubstring } = require('../slidingWindows/lc_3_lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
    test('returns the correct length for a string with no repeating characters', () => {
        expect(lengthOfLongestSubstring('abc')).toBe(3);
    });
});

