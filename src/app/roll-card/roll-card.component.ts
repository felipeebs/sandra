import { Component, Input } from '@angular/core';
import { RollResult } from '../roll-result';


@Component({
  selector: 'sandra-roll-card',
  templateUrl: './roll-card.component.html',
  styleUrls: ['./roll-card.component.scss']
})
export class RollCardComponent {
  @Input() rollResult: RollResult;

  dieColor(n) {
    if (this.rollResult.isCOmplex()) {
      if (n <= this.rollResult.biff) {
        return 'die-biff';
      } else if (n >= this.rollResult.crit) {
        return 'die-crit';
      } else if (n >= this.rollResult.goal) {
        return 'die-goal';
      }
    } else {
      if (n === 1) {
        return 'die-biff';
      } else if (n === this.rollResult.dSize) {
        return 'die-crit';
      }
    }
    return 'die-default';
  }
}
