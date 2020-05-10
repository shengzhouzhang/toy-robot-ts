import { handleRight } from './right';

describe('handleRight', () => {
  test('should rotate direction and return new status', () => {
    const result = handleRight({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'East',
    });
  });
});
