import { handleLeft } from './left';

describe('handleLeft', () => {
  test('should rotate direction and return new status', () => {
    const result = handleLeft({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: 1,
      y: 2,
      direction: 'West',
    });
  });
});
