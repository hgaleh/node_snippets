const events = require('events');
const { doesNotMatch } = require('assert');
const eventEmitter = new events.EventEmitter();

describe('events', () => {
    it('emitter', (done) => {
        eventEmitter.on('scream', () => {
            console.log('scream detected!');
            done();
        });
        eventEmitter.emit('scream');
    });
});