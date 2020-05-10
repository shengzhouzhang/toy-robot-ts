import { Direction } from '../directions/directions';

export const parseDirection = (text: string): Direction => {
  switch (text) {
    case 'NORTH':
      return 'North';
    case 'SOUTH':
      return 'South';
    case 'WEST':
      return 'West';
    case 'EAST':
      return 'East';
    default:
      throw new Error(`invalid direction: ${text}`);
  }
};
