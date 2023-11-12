const { describe, expect, test } = require('@jest/globals');
const { summaryRange } = require('../arrays/lc_228_summaryRanges.js');

describe('summaryRange', () => {
    test('should return ["0->2","4->5","7"]', () => {
        expect(summaryRange([0,1,2,4,5,7])).toEqual(["0->2","4->5","7"]);
    });
});
