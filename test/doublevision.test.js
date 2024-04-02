const doublevision = require('../ejercicios/doublevision');

describe('doublevision #1', () => {
    test('doublevision', () => {
        expect(doublevision("gato")).toBe("ggaattoo");
    });
});

describe('doublevision #2', () => {
    test('doublevision', () => {
        expect(doublevision("pan")).toBe("ppaann");
    });
});

describe('doublevision #3', () => {
    test('doublevision', () => {
        expect(doublevision("Lorem ipsum")).toBe("LLoorreemm  iippssuumm");
    });
});

describe('doublevision #4', () => {
    test('doublevision', () => {
        expect(doublevision("Hola")).toBe("HHoollaa");
    });
});

describe('doublevision #5', () => {
    test('doublevision', () => {
        expect(doublevision("")).toBe("");
    });
});