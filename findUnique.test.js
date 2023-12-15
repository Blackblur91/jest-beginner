const findUnique = require('./findUnique')

test('first number of the array should be unique', () => {
  expect(findUnique([1, 2, 2]))
    .toBe(1)
})

test('second number of the array should be unique', () => {
  expect(findUnique([10, 2, 10]))
    .toBe(2)
})

test('the unique number is not the first or second element in the array', () => {
  expect(findUnique([5, 5, 5, 5, 5, 8]))
    .toBe(8)
})

test('empty array should throw invalid input', () => {
  expect(() => findUnique([]))
    .toThrow("Invalid input")
})