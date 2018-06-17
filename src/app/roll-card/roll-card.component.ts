import { Component, Input } from '@angular/core';
import { DiceRoll } from '../dice-roll';

@Component({
  selector: 'sandra-roll-card',
  templateUrl: './roll-card.component.html',
  styleUrls: ['./roll-card.component.scss']
})
export class RollCardComponent {
  @Input() diceRoll: DiceRoll;
}
