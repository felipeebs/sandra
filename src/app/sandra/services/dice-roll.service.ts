export interface DiceRollService {
  generate(dSize: number, dNum: number, goal: number, crit: number, biff: number): void;
}
