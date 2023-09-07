const add = require('../src/add');

test('Sum of 2 and 3 equals 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('Sum of -2 and -3 equals -5', () => {
  expect(add(-2, -3)).toBe(-5);
});

test('Sum of 0 and 0 equals 0 ', () => {
  expect(add(0, 0)).toBe(0);
});
