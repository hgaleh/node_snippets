const fs = require('fs');
const { doesNotMatch } = require('assert');

describe('fs', () => {
    it('read file', (done) => {
        fs.readFile('spec/test.txt', 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toBe('122');
            done();
        })        
    });
});