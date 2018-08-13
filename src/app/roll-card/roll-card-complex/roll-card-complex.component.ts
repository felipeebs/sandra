import { Component, Input, OnInit } from '@angular/core';
import { RollResult } from '../../sandra';

@Component({
  selector: 'sandra-roll-card-complex',
  templateUrl: './roll-card-complex.component.html',
  styleUrls: [
    '../roll-card.component.scss',
    './roll-card-complex.component.scss'
  ]
})
export class RollCardComplexComponent implements OnInit {
  @Input() rollResult: RollResult;
  total: number;
  successCount = 0;
  critCount = 0;
  failCount = 0;

  dieColor(n) {
    if (this.rollResult.isCOmplex()) {
      if (n <= this.rollResult.biff) {
        return 'die-biff';
      } else if (n >= this.rollResult.crit) {
        return 'die-crit';
      } else if (n >= this.rollResult.goal) {
        return 'die-goal';
      } else {
        return 'die-default';
      }
    } else {
      if (n === 1) {
        return 'die-biff';
      } else if (n === this.rollResult.dSize) {
        return 'die-crit';
      }
    }
  }

  ngOnInit() {
    this.rollResult.roll.forEach(n => {
      if (n <= this.rollResult.biff) {
        this.failCount++;
      }
      if (n >= this.rollResult.goal) {
        this.successCount++;
      }
      if (n >= this.rollResult.crit) {
        this.critCount++;
      }
    });
    this.total = this.successCount + this.critCount - this.failCount;
  }

}
