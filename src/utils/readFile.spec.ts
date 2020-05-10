import { readFile } from './readFile';

jest.mock('fs');

describe('readFile', () => {
  test('should parse file content to text lines', async () => {
    const filePath = 'file-path';
    const result = await readFile(filePath);
    expect(result).toEqual(['First Line', 'Second Line', 'Third Line']);
  });

  test('should propagate Error', async () => {
    const filePath = 'error-file';
    await expect(() => readFile(filePath)).rejects.toThrowError();
  });
});
