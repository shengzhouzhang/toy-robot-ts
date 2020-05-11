import { Table } from 'src/table/table';
import { Action } from 'src/actions/actions';

import { OnTable, OutOfTable } from './status';
import { handlePlace, handleMove, handleLeft, handleRight, handleReport } from './handlers';

export const handleActions = (table: Table, actions: Action[]): OnTable | OutOfTable =>
  actions.reduce(
    (state: OnTable | OutOfTable, action: Action) => {
      switch (action.kind) {
        case 'Place':
          return handlePlace(table, state, action.x, action.y, action.direction);
      }

      if (state.kind === 'OutOfTable') {
        return { kind: 'OutOfTable' };
      }

      switch (action.kind) {
        case 'Move':
          return handleMove(table, state);
        case 'Left':
          return handleLeft(state);
        case 'Right':
          return handleRight(state);
        case 'Report':
          return handleReport(state);
      }
    },
    { kind: 'OutOfTable' },
  );
