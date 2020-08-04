const http = require('http');

describe('http', () => {
    it('return hello', (done) => {
        http.createServer((req, res) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('hello');
            res.end();
        }).listen(8080);
        const options = {
            host: 'localhost',
            port: 8080
        };
        http.request(options, (response) => {
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