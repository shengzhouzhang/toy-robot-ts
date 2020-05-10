import { handlePlace } from './place';
import { Table } from '../../../table/table';

describe('handlePlace', () => {
  const table = new Table(5, 5);

  const CurrentOnTable = {
    kind: 'OnTable',
    x: { kind: 'x', value: 1 },
    y: { kind: 'y', value: 2 },
    direction: 'North',
  };

  const CurrentOutOfTable = { kind: 'OutOfTable' };

  const NextOnTable = {
    kind: 'OnTable',
    x: { kind: 'x', value: 3 },
    y: { kind: 'y', value: 4 },
    direction: 'West',
  };

  test.each`
    current              | x    | y    | expected
    ${CurrentOnTable}    | ${3} | ${4} | ${NextOnTable}
    ${CurrentOutOfTable} | ${3} | ${4} | ${NextOnTable}
  `('should move to new position on the table, kind=$current.kind', ({ current, x, y, expected }) => {
    const result = handlePlace(table, current, { kind: 'x', value: x }, { kind: 'y', value: y }, 'West');

    expect(result).toEqual(expected);
  });

  test.each`
    current              | x    | y    | expected
    ${CurrentOnTable}    | ${5} | ${5} | ${CurrentOnTable}
    ${CurrentOutOfTable} | ${5} | ${5} | ${CurrentOutOfTable}
  `('should ignore if moving to outside of table, kind=$current.kind', ({ current, x, y, expected }) => {
    const result = handlePlace(table, current, { kind: 'x', value: x }, { kind: 'y', value: y }, 'West');

    expect(result).toEqual(expected);
  });
});
