const functions = require("../src/functions");

//toBe
test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.CheckValue(0)).toBeFalsy()
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.CheckValue(null)).toBeFalsy()
})

// toEqual
test('User should be Alejandro Roa object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Alejandro',
    lastName: 'Roa'
  });
});