const dns = require('dns');
const { hasUncaughtExceptionCaptureCallback } = require('process');

describe('dns', () => {
    it('get ip address of domain', (done) => {
        const w3 = dns.lookup('w3schools.com', (err, addresses, family) => {
            expect(addresses).toBe('66.29.212.110');
            done();
        })        
    });
});