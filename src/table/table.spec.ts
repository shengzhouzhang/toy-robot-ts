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
      const result = table.isOnTable({ kind: 'x', value: x }, { kind: 'y', value: y });
      expect(result).toBe(expected);
    });
  });

  describe(`forwardX`, () => {
    test('should move forward on X dimension', () => {
      const result = table.forwardX({ kind: 'x', value: 0 });
      expect(result).toEqual({ kind: 'x', value: 1 });
    });

    test('should NOT move to outside of the table', () => {
      const result = table.forwardX({ kind: 'x', value: 4 });
      expect(result).toEqual({ kind: 'x', value: 4 });
    });
  });

  describe(`forwardY`, () => {
    test('should move forward on Y dimension', () => {
      const result = table.forwardY({ kind: 'y', value: 0 });
      expect(result).toEqual({ kind: 'y', value: 1 });
    });

    test('should NOT move to outside of the table', () => {
      const result = table.forwardY({ kind: 'y', value: 4 });
      expect(result).toEqual({ kind: 'y', value: 4 });
    });
  });

  describe(`backwardX`, () => {
    test('should move backward on X dimension', () => {
      const result = table.backwardX({ kind: 'x', value: 4 });
      expect(result).toEqual({ kind: 'x', value: 3 });
    });

    test('should NOT move to outside of the table', () => {
      const result = table.backwardX({ kind: 'x', value: 0 });
      expect(result).toEqual({ kind: 'x', value: 0 });
    });
  });

  describe(`backwardY`, () => {
    test('should move backward on Y dimension', () => {
      const result = table.backwardY({ kind: 'y', value: 0 });
      expect(result).toEqual({ kind: 'y', value: 0 });
    });

    test('should NOT move to outside of the table', () => {
      const result = table.backwardY({ kind: 'y', value: 4 });
      expect(result).toEqual({ kind: 'y', value: 3 });
    });
  });
});
