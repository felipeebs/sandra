import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OfflineDiceRoll, RollResult, SandraValidators } from './sandra';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rollSettingsForm: FormGroup;
  complex: boolean;
  rollHistory: RollResult[] = [];
  private roller = new OfflineDiceRoll();

  onSubmit() {
    if (this.rollSettingsForm.valid) {
      const values = this.rollSettingsForm.value;
      const roll = this.roller.generate(values.dSize, values.dNum, values.goal, values.crit, values.biff);
      this.rollHistory.unshift(roll);
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.rollSettingsForm = this.formBuilder.group(
      {
        'dSize': null,
        'dNum': null,
        'goal': [null, [SandraValidators.valueLtSize, SandraValidators.validateGoal]],
        'crit': [null, [SandraValidators.valueLtSize, SandraValidators.validateCrit]],
        'biff': [null, [SandraValidators.valueLtSize, SandraValidators.validateBiff]],
      },
      { validator: SandraValidators.validateComplexFields }
    );
  }
}
