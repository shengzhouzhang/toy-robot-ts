import { handleLeft } from './left';

describe('handleLeft', () => {
  test('should rotate direction and return new status', () => {
    const result = handleLeft({
      kind: 'OnTable',
      x: { kind: 'x', value: 1 },
      y: { kind: 'y', value: 2 },
      direction: 'North',
    });

    expect(result).toEqual({
      kind: 'OnTable',
      x: { kind: 'x', value: 1 },
      y: { kind: 'y', value: 2 },
      direction: 'West',
    });
  });
});
