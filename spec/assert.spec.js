const assert = require('assert');

describe('assert test', () => {
    it('bigger than', () => {
        assert(10 > 7, '10 is lower than 7');        
    });

    it('deep equal', () => {
        const x = { a : { n: 0 } };
        const y = { a : { n: 0 } };
        const z = { a : { n: 1 } };
        const a = { a : { n: '1' } };
        assert.deepEqual(x, y);
        assert.notDeepEqual(y, z);
        assert.deepEqual(a, z);
    });

    it('deep strict equal', () => {
        const z = { a : { n: 1 } };
        const a = { a : { n: '1' } };
        assert.notDeepStrictEqual(a, z);
    });

    it('equal', () => {
        const a = 1;
        assert.equal(a, 1);
        assert.notEqual(a, 2);
    });

    it('ok', () => {
        assert.ok(true);
    });
});