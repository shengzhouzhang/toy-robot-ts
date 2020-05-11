import { Table } from 'src/table/table';
import * as logger from 'src/utils/logger';

import { handleActions } from './robot';

jest.mock('src/utils/logger');

describe('robot', () => {
  const table = new Table(5, 5);

  beforeEach(() => {
    (logger.info as jest.Mock).mockReset();
  });

  test('should handle actions and report status', () => {
    const result = handleActions(table, [
      { kind: 'Place', x: 1, y: 2, direction: 'East' },
      { kind: 'Move' },
      { kind: 'Left' },
      { kind: 'Move' },
      { kind: 'Right' },
      { kind: 'Report' },
    ]);

    expect(result).toEqual({
      kind: 'OnTable',
      x: 2,
      y: 3,
      direction: 'East',
    });

    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith('Output: 2,3,EAST');
  });

  test('should ignore actions, when the robot is out of the table', () => {
    const result = handleActions(table, [{ kind: 'Left' }, { kind: 'Move' }, { kind: 'Right' }, { kind: 'Report' }]);

    expect(result).toEqual({
      kind: 'OutOfTable',
    });

    expect(logger.info).not.toHaveBeenCalled();
  });
});
