import { Direction } from '../../../directions/directions';
import { DimensionX, DimensionY, Table } from '../../../table/table';
import { OnTable, OutOfTable } from '../../status';

export const handlePlace = (
  table: Table,
  state: OnTable | OutOfTable,
  x: DimensionX,
  y: DimensionY,
  direction: Direction,
): OnTable | OutOfTable => (table.isOnTable(x, y) ? { kind: 'OnTable', x, y, direction } : state);
