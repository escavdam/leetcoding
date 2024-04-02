const needle = require('../ejercicios/aguja');

describe('needle #1', () => {
    test('needle', () => {
        expect(needle(["gato", "pan", "aguja", "coche"])).toBe(2);
    });
});

describe('needle #2', () => {
    test('needle', () => {
        expect(needle(["aguja", "coche", "gato", "pan"])).toBe(0);
    });
});

describe('needle #3', () => {
    test('needle', () => {
        expect(needle(["gato", "pan", "coche"])).toBe(-1);
    });
});