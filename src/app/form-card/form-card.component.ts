import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfflineDiceRollService } from '../sandra/services';
import { SandraValidators } from '../sandra';

@Component({
  selector: 'sandra-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss'],
  providers: [OfflineDiceRollService]
})
export class FormCardComponent {
  rollSettingsForm: FormGroup;
  complex = false;

  onSubmit() {
    if (this.rollSettingsForm.valid) {
      const values = this.rollSettingsForm.value;
      if (this.complex) {
        this.rollService.generate(values.dSize, values.dNum, values.goal, values.crit, values.biff);
      } else {
        this.rollService.generate(values.dSize, values.dNum);
      }
      this.rollSettingsForm.reset(values);
    }
  }

  onChangeSize(size) {
    if (this.rollSettingsForm.controls['goal'].value > size) {
      this.rollSettingsForm.controls['goal'].setValue(size);
    }
    this.rollSettingsForm.controls['crit'].setValue(size);
  }

  onComplexToggle() {
    this.complex = !this.complex;
    this.rollSettingsForm.controls['complex-input'].setValue(this.complex);
    this.rollSettingsForm.reset(this.rollSettingsForm.value);
  }

  constructor(private formBuilder: FormBuilder,
              private rollService: OfflineDiceRollService) {
    this.rollSettingsForm = this.formBuilder.group(
      {
        'dSize': null,
        'dNum': null,
        'complex-input': false,
        'goal': [null, [SandraValidators.valueLtSize, SandraValidators.validateGoal]],
        'crit': [null, [SandraValidators.valueLtSize, SandraValidators.validateCrit]],
        'biff': [1,    [SandraValidators.valueLtSize, SandraValidators.validateBiff]],
      },
      { validator: SandraValidators.validateComplexFields }
    );
  }

}
