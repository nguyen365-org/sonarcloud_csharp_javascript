const { increment } = require('../scripts/operation5');

test('2 increment to equal 3', () => {
    expect(increment(2)).toBe(3);
});