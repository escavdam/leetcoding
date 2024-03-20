const digitalroot = require('../ejercicios/digitalroot');

test('DigitalRoot 16 => 7', () => {
    expect(digitalroot(16)).toBe(7);
    });

test('DigitalRoot 942 => 6', () => {
    expect(digitalroot(942)).toBe(6);
    });

test('DigitalRoot 132189 => 6', () => {
    expect(digitalroot(132189)).toBe(6);
    });

test('DigitalRoot 493193 => 2', () => {
    expect(digitalroot(493193)).toBe(2);
    });

test('DigitalRoot 123456789 => 9', () => {
    expect(digitalroot(123456789)).toBe(9);
    });

test('DigitalRoot 1234567890 => 9', () => {
    expect(digitalroot(1234567890)).toBe(9);
    });