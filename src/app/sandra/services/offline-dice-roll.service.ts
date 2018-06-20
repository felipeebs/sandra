import { DiceRollService } from './dice-roll.service';
import { RollResult } from '../roll-result';

export class OfflineDiceRollService implements DiceRollService {
  generate(dSize, dNum, goal = null, crit = null, biff = null) {
    return new RollResult(dSize, dNum, crit, goal, biff, this.roll(dSize, dNum));
  }

  roll(dSize, dNum) {
    const roll = [];
    for (let i = 0; i < dNum; i++) {
      roll.push(this.random(dSize));
    }
    return roll;
  }

  private random(dSize) {
    return Math.floor(Math.random() * dSize) + 1;
  }
}
