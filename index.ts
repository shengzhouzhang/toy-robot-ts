import path from 'path';

import { Table } from './src/table/table';
import { handleActions } from './src/robot/robot';

import { readFile } from './src/utils/readFile';
import { parseAction } from './src/utils/parseAction';

const fileName = process.argv[2];

const table = new Table(5, 5);

readFile(path.resolve(fileName))
  .then((lines) => lines.map(parseAction))
  .then((actions) => handleActions(table, actions));
