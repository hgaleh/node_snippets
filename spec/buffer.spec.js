describe('buffer test', () => {
    it('allocate', () => {
        // allocates space to buffer in (byte)
        const buf = Buffer.alloc(15);
        buf[0] = 52;
        expect(buf[0]).toEqual(52);
        buf[1] = 257;
        expect(buf[1]).toEqual(1)
    });

    it('not safe buffer', () => {
        const bf = Buffer.allocUnsafe(5);
        // values are not preset
    });

    it('number of bytes', () => {
        const bf = Buffer.alloc(25);
        const len = Buffer.byteLength(bf);
        expect(len).toBe(25);
    });
});