const { addition } = require('./math');

test('addition de 1 + 2 égale 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('addition de -1 + 1 égale 0', () => {
  expect(addition(-1, 1)).toBe(0);
});

test('addition de 5.5 + 4.5 égale 10', () => {
  expect(addition(5.5, 4.5)).toBe(10);
}); 