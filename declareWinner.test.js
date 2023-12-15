const declareWinner = require('./declareWinner')

const strongFighter = {
  name: "Szikla Szilárd",
  health: 1000,
  damagePerAttack: 50,
}

const weakFighter = {
  name: "Minden Áron",
  health: 100,
  damagePerAttack: 10,
}

test('the figther in the first parameter should win', () => {
  expect(declareWinner(strongFighter, weakFighter,strongFighter.name)).toBe(strongFighter.name)
})

test('the figther in the second parameter should win', () => {
  expect(declareWinner(weakFighter, strongFighter,strongFighter.name)).toBe(strongFighter.name)
})

test ('the second fighter should win', () => {
  expect(declareWinner(strongFighter, weakFighter, weakFighter.name)).toBe(strongFighter.name)
})