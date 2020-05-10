import { handleMove } from './move';
import { Table } from '../../../table/table';

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
        x: { kind: 'x', value: x },
        y: { kind: 'y', value: 2 },
        direction: direction,
      });

      expect(result).toEqual({
        kind: 'OnTable',
        x: { kind: 'x', value: expected },
        y: { kind: 'y', value: 2 },
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
        x: { kind: 'x', value: 2 },
        y: { kind: 'y', value: y },
        direction: direction,
      });

      expect(result).toEqual({
        kind: 'OnTable',
        x: { kind: 'x', value: 2 },
        y: { kind: 'y', value: expected },
        direction: direction,
      });
    },
  );
});
