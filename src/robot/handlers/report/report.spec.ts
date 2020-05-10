import { handleReport } from './report';
import * as logger from '../../../utils/logger';

jest.mock('../../../utils/logger');

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
    expect(logger.info).toHaveBeenCalledWith(1, 2, 'North');
  });
});
