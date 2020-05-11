import path from 'path';

import { Table } from 'src/table/table';
import { handleActions } from 'src/robot/robot';
import { OnTable, OutOfTable } from 'src/robot/status';

import { readFile } from 'src/utils/readFile';
import { parseAction } from 'src/utils/parseAction';

export const runProgram = async (filePath: string): Promise<OnTable | OutOfTable> => {
  const table = new Table(5, 5);
  try {
    const lines = await readFile(filePath);
    const actions = lines.map(parseAction);
    return handleActions(table, actions);
  } catch (error) {
    console.error('program error: ', error);
    return { kind: 'OutOfTable' };
  }
};

const fileName = process.argv[2];

if (fileName) {
  const filePath = path.resolve(fileName);
  runProgram(filePath);
}
