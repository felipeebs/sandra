import { Component } from '@angular/core';
import { OfflineDiceRoll } from './dice-roll-offline';
import { RollResult } from './roll-result';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dSize: number;
  dNum: number;
  goal: number;
  crit: number;
  biff: number;
  rollHistory: RollResult[] = [];
  private roller = new OfflineDiceRoll();

  rollClicked() {
    const roll = this.roller.generate(this.dSize, this.dNum, this.goal, this.crit, this.biff);
    this.rollHistory.push(roll);
  }
}
