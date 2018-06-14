import { DiceRoll } from './dice-roll';

export class OfflineDiceRoll implements DiceRoll {
  roll(dSize: number, crit: number, goal: number, biff: number): number {
    const roll: number = Math.floor(Math.random() * dSize) + 1;
    return roll;
  }
}
