const doppel = require('../doppelganger');

describe('doppel #1', () => {
    test('doppel', () => {
        expect(doppel("gato")).toBe("gatootag");
    });
});

describe('doppel #2', () => {
    test('doppel', () => {
        expect(doppel("pan")).toBe("pannap");
    });
});
    
describe('doppel #3', () => {
    test('doppel', () => {
        expect(doppel("Lorem ipsum")).toBe("Lorem ipsummuspi meroL");
    });
});