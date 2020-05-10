import { parseDirection } from './parseDirection';

describe('parseDirection', () => {
  test.each`
    text       | expected
    ${'NORTH'} | ${'North'}
    ${'SOUTH'} | ${'South'}
    ${'WEST'}  | ${'West'}
    ${'EAST'}  | ${'East'}
  `('should parse text $text to type $expected', ({ text, expected }) => {
    const result = parseDirection(text);
    expect(result).toBe(expected);
  });

  test('should throw error for invalid direction text', () => {
    const text = 'Others';
    expect(() => parseDirection(text)).toThrowError('Invalid Direction: Others');
  });
});
