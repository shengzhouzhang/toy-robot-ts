import { OnTable } from '../../status';
import * as logger from '../../../utils/logger';

export const handleReport = (state: OnTable): OnTable => {
  logger.info(`Output: ${state.x},${state.y},${state.direction.toLocaleUpperCase()}`);
  return state;
};
