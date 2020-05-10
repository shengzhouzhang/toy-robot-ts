import { handleActions } from './robot';
import { Table } from '../table/table';
import * as logger from '../utils/logger';

jest.mock('../utils/logger');

describe('robot', () => {
  const table = new Table(5, 5);

  beforeEach(() => {
    (logger.info as jest.Mock).mockReset();
  });

  test('should handle actions and report status', () => {
    const result = handleActions(table, [
      { kind: 'Place', x: { kind: 'x', value: 1 }, y: { kind: 'y', value: 2 }, direction: 'East' },
      { kind: 'Move' },
      { kind: 'Left' },
      { kind: 'Move' },
      { kind: 'Right' },
      { kind: 'Report' },
    ]);

    expect(result).toEqual({
      kind: 'OnTable',
      x: { kind: 'x', value: 2 },
      y: { kind: 'y', value: 3 },
      direction: 'East',
    });

    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith(2, 3, 'East');
  });

  test('should ignore actions, when the robot is out of the table', () => {
    const result = handleActions(table, [{ kind: 'Left' }, { kind: 'Move' }, { kind: 'Right' }, { kind: 'Report' }]);

    expect(result).toEqual({
      kind: 'OutOfTable',
    });

    expect(logger.info).not.toHaveBeenCalled();
  });
});
