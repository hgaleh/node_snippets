const https = require('https');
const fs = require('fs');
const port = 8081

describe('https', () => {
    it('return hello', (done) => {
        const serverOptions = {
            key: fs.readFileSync('ssl/domain.key-x509'),
            cert: fs.readFileSync('ssl/domain.crt')
        };
        https.createServer(serverOptions, (req, res) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end('hello');
        }).listen(port);

        const requestHeaders = {
            'User-Agent':       'deprecated',
            'accepted':     'application/json',
            'applicationuser':'deprecated'
        }
        const requestOptions = {
            url: 'localhost',
            port,
            method: 'GET',
            secureProtocol : "TLSv1_2_method",
            headers: requestHeaders
        };
        https.request(requestOptions, (response) => {
            let str = '';
            response.on('data', (chunk) => {
                str += chunk;
            });
            response.on('end', () => {
                expect(str).toBe('hello');
                done()
            })
        }).end();        
    });
});