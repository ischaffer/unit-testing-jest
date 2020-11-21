const sum = require('./sum')


test('Adding of two numbers', () => {
    expect(sum(1,2)).toBe(3)
})