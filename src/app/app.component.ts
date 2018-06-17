import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OfflineDiceRoll } from './dice-roll-offline';
import { RollResult } from './roll-result';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rollSettingsForm: FormGroup;
  complex: boolean;
  rollHistory: RollResult[] = [];
  private roller = new OfflineDiceRoll();

  onSubmit() {
    if (this.rollSettingsForm.valid) {
      const values = this.rollSettingsForm.value;
      let roll;
      if (this.complex) {
        roll = this.roller.generate(values.dSize, values.dNum, values.goal, values.crit, values.biff);
      } else {
        roll = this.roller.generate(values.dSize, values.dNum);
      }
      this.rollHistory.unshift(roll);
    }
  }

  ngOnInit() {
    this.rollSettingsForm = new FormGroup({
      'dSize': new FormControl(null),
      'dNum': new FormControl(null),
      'goal': new FormControl(null),
      'crit': new FormControl(null),
      'biff': new FormControl(null),
    });
  }
}
