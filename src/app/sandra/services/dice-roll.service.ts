import { RollResult } from '../roll-result';

export interface DiceRollService {
  generate(dSize: number, dNum: number, goal: number, crit: number, biff: number): RollResult;

  roll(dSize: number, dNum: number): number[];
}
