import { OnTable } from '../../status';
import * as logger from '../../../utils/logger';

export const handleReport = (state: OnTable): OnTable => {
  logger.info(state.x.value, state.y.value, state.direction);
  return state;
};
