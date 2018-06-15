import { DiceRoll } from './dice-roll';
import { RollResult } from './roll-result';

export class OfflineDiceRoll implements DiceRoll {
  generate(dSize, dNum, goal, crit, biff) {
    return new RollResult(dSize, dNum, crit, goal, biff, this.roll(dSize, dNum));
  }

  roll(dSize, dNum) {
    const roll = [];
    for (let i = 0; i < dNum; i++) {
      roll.push(this.random(dSize));
    }
    return roll;
  }

  random(dSize) {
    const roll: number = Math.floor(Math.random() * dSize) + 1;
    return roll;
  }
}
