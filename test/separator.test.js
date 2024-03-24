const separator = require('../ejercicios/separator');

describe('separator #1', () => {
    test('separator', () => {
        expect(separator("gato", "/")).toBe("g/a/t/o/");
    });
});

describe('separator #2', () => {
    test('separator', () => {
        expect(separator("pan", "/")).toBe("p/a/n/");
    });
});

describe('separator #3', () => {
    test('separator', () => {
        expect(separator("Lorem ipsum", "a")).toBe("Loraem iapsam");
    });
});

