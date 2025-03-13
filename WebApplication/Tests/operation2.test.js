const { multiply, divide } = require('../Scripts/operation2');

test('adds 1 + 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);

});
test('4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);

});