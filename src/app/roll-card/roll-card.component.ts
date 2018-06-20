import { Component, Input, OnInit } from '@angular/core';
import { RollResult } from '../sandra';

@Component({
  selector: 'sandra-roll-card',
  templateUrl: './roll-card.component.html',
  styleUrls: ['./roll-card.component.scss']
})
export class RollCardComponent implements OnInit {
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

  ngOnInit() {
    if (this.rollResult.isCOmplex()) {
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
    } else {
      this.total = this.rollResult.roll.reduce((s, n) => s + n, 0);
    }
  }
}
