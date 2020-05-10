import { handleRight } from './right';

describe('handleRight', () => {
  test('should rotate direction and return new status', () => {
    const result = handleRight({
      kind: 'OnTable',
      x: { kind: 'x', value: 1 },
      y: { kind: 'y', value: 2 },
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: { kind: 'x', value: 1 },
      y: { kind: 'y', value: 2 },
      direction: 'East',
    });
  });
});
