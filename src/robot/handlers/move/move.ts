import { Table } from '../../../table/table';
import { OnTable } from '../../status';

export const handleMove = (table: Table, { x, y, direction }: OnTable): OnTable => {
  switch (direction) {
    case 'North':
      return { kind: 'OnTable', x, y: table.forwardY(y), direction };
    case 'East':
      return { kind: 'OnTable', y, x: table.forwardX(x), direction };
    case 'South':
      return { kind: 'OnTable', x, y: table.backwardY(y), direction };
    case 'West':
      return { kind: 'OnTable', y, x: table.backwardX(x), direction };
  }
};
