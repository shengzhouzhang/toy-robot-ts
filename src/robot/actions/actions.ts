import { Direction } from '../../directions/directions';
import { DimensionX, DimensionY } from '../../table/table';

export type Place = {
  kind: 'Place';
  x: DimensionX;
  y: DimensionY;
  direction: Direction;
};

export type Move = {
  kind: 'Move';
};

export type Left = {
  kind: 'Left';
};

export type Right = {
  kind: 'Right';
};

export type Report = {
  kind: 'Report';
};

export type Action = Place | Left | Right | Move | Report;
