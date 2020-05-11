import { OnTable } from 'src/robot/status';
import * as logger from 'src/utils/logger';

export const handleReport = (state: OnTable): OnTable => {
  logger.info(`Output: ${state.x},${state.y},${state.direction.toLocaleUpperCase()}`);
  return state;
};
