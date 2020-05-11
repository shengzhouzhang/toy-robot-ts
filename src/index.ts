import path from 'path';

import { Table } from './table/table';
import { handleActions } from './robot/robot';
import { OnTable, OutOfTable } from './robot/status';

import { readFile } from './utils/readFile';
import { parseAction } from './utils/parseAction';

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
