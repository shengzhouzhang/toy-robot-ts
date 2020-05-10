import { parseAction } from './parseAction';

describe('parseAction', () => {
  test.each`
    text                | expected
    ${'PLACE 1,3,EAST'} | ${{ kind: 'Place', x: 1, y: 3, direction: 'East' }}
    ${'MOVE'}           | ${{ kind: 'Move' }}
    ${'LEFT'}           | ${{ kind: 'Left' }}
    ${'RIGHT'}          | ${{ kind: 'Right' }}
    ${'REPORT'}         | ${{ kind: 'Report' }}
  `('should parse text "$text" to type $expected', ({ text, expected }) => {
    const result = parseAction(text);
    expect(result).toEqual(expected);
  });

  test('should throw error for invalid action text', () => {
    const text = 'Others';
    expect(() => parseAction(text)).toThrowError('Invalid Action: Others');
  });
});
