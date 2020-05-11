import { Table } from 'src/table/table';
import { handlePlace } from './place';

describe('handlePlace', () => {
  const table = new Table(5, 5);

  const CurrentOnTable = {
    kind: 'OnTable',
    x: 1,
    y: 2,
    direction: 'North',
  };

  const CurrentOutOfTable = { kind: 'OutOfTable' };

  const NextOnTable = {
    kind: 'OnTable',
    x: 3,
    y: 4,
    direction: 'West',
  };

  test.each`
    current              | x    | y    | expected
    ${CurrentOnTable}    | ${3} | ${4} | ${NextOnTable}
    ${CurrentOutOfTable} | ${3} | ${4} | ${NextOnTable}
  `('should move to new position on the table, kind=$current.kind', ({ current, x, y, expected }) => {
    const result = handlePlace(table, current, x, y, 'West');
    expect(result).toEqual(expected);
  });

  test.each`
    current              | x    | y    | expected
    ${CurrentOnTable}    | ${5} | ${5} | ${CurrentOnTable}
    ${CurrentOutOfTable} | ${5} | ${5} | ${CurrentOutOfTable}
  `('should ignore if moving to outside of table, kind=$current.kind', ({ current, x, y, expected }) => {
    const result = handlePlace(table, current, x, y, 'West');
    expect(result).toEqual(expected);
  });
});
