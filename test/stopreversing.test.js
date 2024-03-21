const reverse = require('../ejercicios/stopreversing');

test('Reversing "hola" => "aloh"', () => {
    expect(reverse('hola')).toBe('aloh');
    });

test('Reversing "mundo" => "odnum"', () => {
    expect(reverse('mundo')).toBe('odnum');
    });

test('Reversing "hola mundo" => "odnum aloh"', () => {
    expect(reverse('hola mundo')).toBe('odnum aloh');
    });

test('Reversing "donde caemos gente" => "etneg someac ednod"', () => {
    expect(reverse('donde caemos gente')).toBe('etneg someac ednod');
    });

test('Reversing "Lorem ipsun dolor sit amet" => "tema tis rolod nuspi meroL"', () => {
    expect(reverse('Lorem ipsun dolor sit amet')).toBe('tema tis rolod nuspi meroL');
    });

test('Reversing 123456789 => 987654321', () => {
    expect(reverse('123456789')).toBe('987654321');
    });