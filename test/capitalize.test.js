const capitalize = require('../ejercicios/capitalize');

test('Capitalizar "hola" => "Hola"', () => {
  expect(capitalize('hola')).toBe('Hola');
});

test('Capitalizar "mundo" => "Mundo"', () => {
    expect(capitalize('mundo')).toBe('Mundo');
    });

test('Capitalizar "hola mundo" => "Hola mundo"', () => {
    expect(capitalize('hola mundo')).toBe('Hola mundo');
    });

test('Capitalizar "donde caemos gente" => "Donde caemos gente"', () => {
    expect(capitalize('donde caemos gente')).toBe('Donde caemos gente');
    });

