import { Direction, rotateLeft, rotateRight } from './directions';

describe('direction', () => {
  type Rotate = {
    direction: Direction;
    expected: Direction;
  };

  describe('rotate left', () => {
    test.each`
      direction  | expected
      ${'North'} | ${'West'}
      ${'West'}  | ${'South'}
      ${'South'} | ${'East'}
      ${'East'}  | ${'North'}
    `('should rotate $direction to $expected', ({ direction, expected }: Rotate) => {
      const result = rotateLeft(direction);
      expect(result).toBe(expected);
    });
  });

  describe('rotate right', () => {
    test.each`
      direction  | expected
      ${'North'} | ${'East'}
      ${'West'}  | ${'North'}
      ${'South'} | ${'West'}
      ${'East'}  | ${'South'}
    `('should rotate %s to %s', ({ direction, expected }: Rotate) => {
      const result = rotateRight(direction);
      expect(result).toBe(expected);
    });
  });
});
