import { Action } from '@ngrx/store';
import { RollResult } from '../roll-result';

export const ADD_ROLL = 'ADD_ROLL';
export const IS_ROLLING = 'IS_ROLLING';
export const ROLL_FAILED = 'ROLL_FAILED';

export class AddRoll implements Action {
  readonly type = ADD_ROLL;
  constructor(public payload: RollResult) {}
}

export class IsRolling implements Action {
  readonly type = IS_ROLLING;
}

export class RollFailed implements Action {
  readonly type = ROLL_FAILED;
}

export type SandraActions = AddRoll | IsRolling | RollFailed;
