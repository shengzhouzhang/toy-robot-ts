import { Direction } from 'src/directions/directions';
import { DimensionX, DimensionY } from 'src/table/table';

export type OnTable = {
  kind: 'OnTable';
  x: DimensionX;
  y: DimensionY;
  direction: Direction;
};

export type OutOfTable = {
  kind: 'OutOfTable';
};
