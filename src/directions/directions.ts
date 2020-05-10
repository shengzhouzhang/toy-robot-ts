export type North = 'North';
export type South = 'South';
export type West = 'West';
export type East = 'East';

export type Direction = North | South | West | East;

export const rotateLeft = (direction: Direction): Direction => {
  switch (direction) {
    case 'North':
      return 'West';
    case 'South':
      return 'East';
    case 'West':
      return 'South';
    case 'East':
      return 'North';
  }
};

export const rotateRight = (direction: Direction): Direction => {
  switch (direction) {
    case 'North':
      return 'East';
    case 'South':
      return 'West';
    case 'West':
      return 'North';
    case 'East':
      return 'South';
  }
};
