const leet = require('../ejercicios/leet');

test('Leet "hola" => "h0l4"', () => {
    expect(leet('hola')).toBe('h0l4');
    });

test('Leet "get doxxed" => "g37 d0xx3d"', () => {
    expect(leet('get doxxed')).toBe('937 d0xx3d');
    });

test('Leet "lorem ipsum dolor sit amet" => "l0r3m 1p5um d0l0r 517 4m37"', () => {
    expect(leet('lorem ipsum dolor sit amet')).toBe('l0r3m 1p5um d0l0r 517 4m37');
    });