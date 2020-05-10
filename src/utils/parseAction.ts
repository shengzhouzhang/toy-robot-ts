import { Action } from '../actions/actions';
import { parseDirection } from './parseDirection';

export const parseAction = (text: string): Action => {
  const args = text.trim().split(/ |,/);
  switch (args[0]) {
    case 'PLACE':
      return {
        kind: 'Place',
        x: { kind: 'x', value: parseInt(args[1], 10) },
        y: { kind: 'y', value: parseInt(args[2], 10) },
        direction: parseDirection(args[3]),
      };
    case 'MOVE':
      return { kind: 'Move' };
    case 'LEFT':
      return { kind: 'Left' };
    case 'RIGHT':
      return { kind: 'Right' };
    case 'REPORT':
      return { kind: 'Report' };
    default:
      throw new Error(`Invalid Action: ${args[0]}`);
  }
};
