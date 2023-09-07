const calculateTriangleArea = require('../src/triangleArea');

test('The area of a triangle with base 4 and height 6 is equal to 12', () => {
  expect(calculateTriangleArea(4, 6)).toBe(12);
});

test('The area of a triangle with base 0 and height 8 is equal to 0', () => {
  expect(calculateTriangleArea(0, 8)).toBe(0);
});
