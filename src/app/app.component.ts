import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RollResult, SandraValidators } from './sandra';
import { OfflineDiceRollService } from './sandra/services';

@Component({
  selector: 'sandra-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [OfflineDiceRollService]
})
export class AppComponent {
  rollSettingsForm: FormGroup;
  complex: boolean;
  rollHistory: RollResult[] = [];

  onSubmit() {
    if (this.rollSettingsForm.valid) {
      const values = this.rollSettingsForm.value;
      const roll = this.rollService.generate(values.dSize, values.dNum, values.goal, values.crit, values.biff);
      this.rollHistory.unshift(roll);
    }
  }

  constructor(private formBuilder: FormBuilder, private rollService: OfflineDiceRollService) {
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
