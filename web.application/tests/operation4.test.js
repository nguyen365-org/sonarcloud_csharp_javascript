const { power } = require('../scripts/operation4');

test('2 power 3 to equal 8', () => {
    expect(power(2, 3)).toBe(8);
});