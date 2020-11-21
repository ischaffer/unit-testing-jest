const subtract = require('./subtract')


test('Subtracting of two numbers', () => {
    expect(
        subtract(3,2)
    ).toBe(1)
})

