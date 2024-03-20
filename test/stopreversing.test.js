const reversing = require('../ejercicios/stopreversing');

test('Reversing "hola" => "aloh"', () => {
    expect(reversing('hola')).toBe('aloh');
    });

test('Reversing "mundo" => "odnum"', () => {
    expect(reversing('mundo')).toBe('odnum');
    });

test('Reversing "hola mundo" => "odnum aloh"', () => {
    expect(reversing('hola mundo')).toBe('odnum aloh');
    });

test('Reversing "donde caemos gente" => "etneg someac ednod"', () => {
    expect(reversing('donde caemos gente')).toBe('etneg someac ednod');
    });

test('Reversing "Lorem ipsun dolor sit amet" => "tema tis rolod nuspi meroL"', () => {
    expect(reversing('Lorem ipsun dolor sit amet')).toBe('tema tis rolod nuspi meroL');
    });

test('Reversing 123456789 => 987654321', () => {
    expect(reversing('123456789')).toBe('987654321');
    });