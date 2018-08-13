import { Component, Input, OnInit } from '@angular/core';
import { RollResult } from '../../sandra';

@Component({
  selector: 'sandra-roll-card-simple',
  templateUrl: './roll-card-simple.component.html',
  styleUrls: [
    '../roll-card.component.scss',
    './roll-card-simple.component.scss'
  ]
})
export class RollCardSimpleComponent implements OnInit {
  @Input() rollResult: RollResult;
  total: number;

  ngOnInit() {
    this.total = this.rollResult.roll.reduce((s, n) => s + n, 0);
  }

}
