import { Table } from './table';

const SIZE = 5;

describe(`Table`, () => {
  const table = new Table(SIZE, SIZE);

  describe(`isOnTable (size=${SIZE})`, () => {
    test.each`
      x     | y     | expected
      ${0}  | ${0}  | ${true}
      ${4}  | ${4}  | ${true}
      ${-1} | ${-1} | ${false}
      ${5}  | ${5}  | ${false}
    `(`should return $expected if x=$x y=$y`, ({ x, y, expected }) => {
      const result = table.isOnTable(x, y);
      expect(result).toBe(expected);
    });
  });

  describe(`forwardX`, () => {
    test('should move forward on X dimension', () => {
      const result = table.forwardX(0);
      expect(result).toEqual(1);
    });

    test('should NOT move to outside of the table', () => {
      const result = table.forwardX(4);
      expect(result).toEqual(4);
    });
  });

  describe(`forwardY`, () => {
    test('should move forward on Y dimension', () => {
      const result = table.forwardY(0);
      expect(result).toEqual(1);
    });

    test('should NOT move to outside of the table', () => {
      const result = table.forwardY(4);
      expect(result).toEqual(4);
    });
  });

  describe(`backwardX`, () => {
    test('should move backward on X dimension', () => {
      const result = table.backwardX(4);
      expect(result).toEqual(3);
    });

    test('should NOT move to outside of the table', () => {
      const result = table.backwardX(0);
      expect(result).toEqual(0);
    });
  });

  describe(`backwardY`, () => {
    test('should move backward on Y dimension', () => {
      const result = table.backwardY(0);
      expect(result).toEqual(0);
    });

    test('should NOT move to outside of the table', () => {
      const result = table.backwardY(4);
      expect(result).toEqual(3);
    });
  });
});
