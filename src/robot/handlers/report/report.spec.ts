import * as logger from 'src/utils/logger';
import { handleReport } from './report';

jest.mock('src/utils/logger');

describe('handleReport', () => {
  test('should log robot status', () => {
    const result = handleReport({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith('Output: 1,2,NORTH');
  });
});
