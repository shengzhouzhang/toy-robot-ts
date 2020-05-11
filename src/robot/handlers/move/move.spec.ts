import { Table } from 'src/table/table';
import { handleMove } from './move';

describe('handleMove', () => {
  const table = new Table(5, 5);

  test.each`
    x    | direction | expected
    ${1} | ${'East'} | ${2}
    ${4} | ${'East'} | ${4}
    ${1} | ${'West'} | ${0}
    ${0} | ${'West'} | ${0}
  `(
    'should move on dimension X, direction=$direction, before x=$x, after x=$expected',
    ({ x, direction, expected }) => {
      const result = handleMove(table, {
        kind: 'OnTable',
        x,
        y: 2,
        direction: direction,
      });

      expect(result).toEqual({
        kind: 'OnTable',
        x: expected,
        y: 2,
        direction: direction,
      });
    },
  );

  test.each`
    y    | direction  | expected
    ${1} | ${'North'} | ${2}
    ${4} | ${'North'} | ${4}
    ${1} | ${'South'} | ${0}
    ${0} | ${'South'} | ${0}
  `(
    'should move on dimension Y, direction=$direction, before y=$y, after y=$expected',
    ({ y, direction, expected }) => {
      const result = handleMove(table, {
        kind: 'OnTable',
        x: 2,
        y,
        direction: direction,
      });

      expect(result).toEqual({
        kind: 'OnTable',
        x: 2,
        y: expected,
        direction: direction,
      });
    },
  );
});
