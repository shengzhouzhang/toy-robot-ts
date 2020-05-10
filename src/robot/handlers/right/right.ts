import { rotateRight } from '../../../directions/directions';
import { OnTable } from '../../status';

export const handleRight = ({ x, y, direction }: OnTable): OnTable => ({
  kind: 'OnTable',
  x,
  y,
  direction: rotateRight(direction),
});
