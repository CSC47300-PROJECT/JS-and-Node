const sum = require('./sum');
const square = require('./square')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('square 2 to equal 4', () => {
  expect(square(2)).toBe(4);
});