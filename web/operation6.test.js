const { decrement } = require('./operation6');

test('2 decrement to equal 1', () => {
    expect(decrement(2)).toBe(1);
});