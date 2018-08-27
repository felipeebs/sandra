import * as SandraActions from './sandra.actions';
import { RollResult } from '../roll-result';

export interface AppState {
  rolls: State;
}

export interface State {
  history: RollResult[];
  isRolling: boolean;
}

const initialState: State = {
  history: [],
  isRolling: false
};

export function sandraReducer(state = initialState, action: SandraActions.SandraActions) {
  switch (action.type) {
    case SandraActions.ADD_ROLL:
      return {
        ...state,
        history: [action.payload, ...state.history],
        isRolling: false
      };
    case SandraActions.IS_ROLLING:
      return {
        ...state,
        isRolling: true
      };
    case SandraActions.ROLL_FAILED:
      return {
        ...state,
        isRolling: false
      };
  }
  return state;
}
