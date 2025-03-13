const { modulus } = require('../scripts/operation7');

test('adds 5 % 2 to equal 1', () => {
    expect(modulus(5, 2)).toBe(1);
});