import { rotateLeft } from '../../../directions/directions';
import { OnTable } from '../../status';

export const handleLeft = ({ x, y, direction }: OnTable): OnTable => ({
  kind: 'OnTable',
  x,
  y,
  direction: rotateLeft(direction),
});
