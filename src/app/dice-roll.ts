export interface DiceRoll {
  roll(dSize: number, crit: number, goal: number, biff: number): number;
}
