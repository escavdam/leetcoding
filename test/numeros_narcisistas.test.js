const isNarcissist = require('../ejercicios/numeros_narcisistas')

describe('isNarcissist #1', () => {
    test('isNarcissist', () => {
        expect(isNarcissist(153)).toBe(true);
    });
});

describe('isNarcissist #2', () => {
    test('isNarcissist', () => {
        expect(isNarcissist(370)).toBe(true);
    });
});

describe('isNarcissist #3', () => {
    test('isNarcissist', () => {
        expect(isNarcissist(371)).toBe(true);
    });
});

describe('isNarcissist #4', () => {
    test('isNarcissist', () => {
        expect(isNarcissist(2)).toBe(false);
    });
});

describe('isNarcissist #5', () => {
    test('isNarcissist', () => {
        expect(isNarcissist(9474)).toBe(true);
    });
});