const dgram = require('dgram');

// to send messages from one pc to another

describe('datagram', () => {
    it('listenner', (done) => {
        const s = dgram.createSocket('udp4');
        s.on('message', (msg, rinfo) => {
            console.log(`I got this message: ${msg.toString()}`);
            done();
        });
        s.bind(8080);
        s.send(Buffer.from('abc'), 8080, 'localhost');        
    });
});