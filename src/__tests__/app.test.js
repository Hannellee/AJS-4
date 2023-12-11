import showLife from '../app';

test('showLife test healthy', () => {
  const char = { name: 'Маг', health: 90 };
  const result = showLife(char.health);
  expect(result).toBe('healthy');
});

test('showLife test wounded', () => {
  const char = { name: 'Маг', health: 40 };
  const result = showLife(char.health);
  expect(result).toBe('wounded');
});

test('showLife test critical', () => {
  const char = { name: 'Маг', health: 10 };
  const result = showLife(char.health);
  expect(result).toBe('critical');
});
