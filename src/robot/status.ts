import { Direction } from '../directions/directions';
import { DimensionX, DimensionY } from '../table/table';

export type OnTable = {
  kind: 'OnTable';
  x: DimensionX;
  y: DimensionY;
  direction: Direction;
};

export type OutOfTable = {
  kind: 'OutOfTable';
};
