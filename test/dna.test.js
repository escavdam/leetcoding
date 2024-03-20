const ARNtoDNA = require("../ejercicios/dna");

test('ARNtoDNA "AUG" => "ATG"', () => {
    expect(ARNtoDNA('AUG')).toBe('ATG');
    });

test('ARNtoDNA "AUGU" => "ATGT"', () => {
    expect(ARNtoDNA('AUGU')).toBe('ATGT');
    });

test('ARNtoDNA "AUGUAC" => "ATGTAC"', () => {
    expect(ARNtoDNA('AUGUAC')).toBe('ATGTAC');
    });

test('ARNtoDNA "AUGUACG" => "ATGTACG"', () => {
    expect(ARNtoDNA('AUGUACG')).toBe('ATGTACG');
    });

test('ARNtoDNA "AUGUACGC" => "ATGTACGC"', () => {
    expect(ARNtoDNA('AUGUACGC')).toBe('ATGTACGC');
    });

test('ARNtoDNA "AUGUACGCA" => "ATGTACGCA"', () => {
    expect(ARNtoDNA('AUGUACGCA')).toBe('ATGTACGCA');
    });