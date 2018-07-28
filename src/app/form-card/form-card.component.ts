import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfflineDiceRollService } from '../sandra/services';
import { RollResult, SandraValidators } from '../sandra';

@Component({
  selector: 'sandra-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  providers: [OfflineDiceRollService]
})
export class FormCardComponent {
  @Input() rollHistory: RollResult[];
  rollSettingsForm: FormGroup;
  complex = false;

  onSubmit() {
    if (this.rollSettingsForm.valid) {
      const values = this.rollSettingsForm.value;
      let roll: RollResult;
      if (this.complex) {
        roll = this.rollService.generate(values.dSize, values.dNum, values.goal, values.crit, values.biff);
      } else {
        roll = this.rollService.generate(values.dSize, values.dNum);
      }
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
