import { DiceRollService } from './dice-roll.service';
import { RollResult } from '../roll-result';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromSandra from '../store/sandra.reducers';
import * as SandraActions from '../store/sandra.actions';

@Injectable({
  providedIn: 'root'
})
export class OfflineDiceRollService implements DiceRollService {

  constructor(private state: Store<fromSandra.AppState>) {}

  generate(dSize, dNum, goal = null, crit = null, biff = null) {
    const roll = new RollResult(dSize, dNum, crit, goal, biff, this.roll(dSize, dNum));
    this.state.dispatch(new SandraActions.AddRoll(roll));
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
