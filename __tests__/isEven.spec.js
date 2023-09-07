const isEven = require('../src/isEven');

test('Check if 4 is an even number', () => {
  expect(isEven(4)).toBe(true);
});

test('Check if 7 is an even number', () => {
  expect(isEven(7)).toBe(false);
});
