import { rotateLeft } from 'src/directions/directions';
import { OnTable } from 'src/robot/status';

export const handleLeft = ({ x, y, direction }: OnTable): OnTable => ({
  kind: 'OnTable',
  x,
  y,
  direction: rotateLeft(direction),
});
