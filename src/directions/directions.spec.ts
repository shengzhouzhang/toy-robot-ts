import { Direction, rotateLeft, rotateRight } from './directions';

describe('direction', () => {
  describe('rotate left', () => {
    test.each([
      ['North', 'West'],
      ['West', 'South'],
      ['South', 'East'],
      ['East', 'North'],
    ])('should rotate %s to %s', (direction: Direction, expected: Direction) => {
      const result = rotateLeft(direction);
      expect(result).toBe(expected);
    });
  });

  describe('rotate right', () => {
    test.each([
      ['North', 'East'],
      ['East', 'South'],
      ['South', 'West'],
      ['West', 'North'],
    ])('should rotate %s to %s', (direction: Direction, expected: Direction) => {
      const result = rotateRight(direction);
      expect(result).toBe(expected);
    });
  });
});
