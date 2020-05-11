import { exec } from 'child_process';

describe('integration', () => {
  const runCommand = (command): Promise<string> =>
    new Promise((resolve, reject) => {
      exec(command, (err, stdout) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(stdout.trim());
      });
    });

  test.each`
    file                           | output
    ${'./test/fixtures/example-a'} | ${'Output: 0,1,NORTH'}
    ${'./test/fixtures/example-b'} | ${'Output: 0,0,WEST'}
    ${'./test/fixtures/example-c'} | ${'Output: 3,3,NORTH'}
  `('should read the file "$file" and output "$output"', async ({ file, output }) => {
    const result = await runCommand(`yarn start ${file} | grep -i "output"`);
    expect(result).toEqual(output);
  });
});
