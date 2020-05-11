import fs from 'fs';

export const readFile = (filePath: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  }).then((context: string) => context.split(/\r?\n/).filter((line) => !!line));
