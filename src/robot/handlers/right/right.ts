import { rotateRight } from 'src/directions/directions';
import { OnTable } from 'src/robot/status';

export const handleRight = ({ x, y, direction }: OnTable): OnTable => ({
  kind: 'OnTable',
  x,
  y,
  direction: rotateRight(direction),
});
