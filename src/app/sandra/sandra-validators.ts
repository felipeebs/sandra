import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

export class SandraValidators {
  static valueLtSize(control: FormControl): ValidationErrors {
    if (control.dirty) {
      const size = control.parent.controls['dSize'].value;
      if (size && control.value > size) {
        return { 'gtSize': true };
      }
    }
    return null;
  }

  static validateGoal(control: FormControl): ValidationErrors {
    if (control.parent && control.parent.controls['complex-input'].value) {
      const goal = control.value;
      const crit = control.parent.controls['crit'].value;
      const biff = control.parent.controls['biff'].value;

      const errors = {};
      if (crit && goal > crit) {
        errors['gtCrit'] = true;
      }
      if (biff && goal <= biff) {
        errors['lteBiff'] = true;
      }
      if (Object.keys(errors).length !== 0) {
        return errors;
      }
    }
    return null;
  }

  static validateCrit(control: FormControl): ValidationErrors {
    if (control.parent && control.parent.controls['complex-input'].value) {
      const goal = control.parent.controls['goal'].value;
      const crit = control.value;
      const biff = control.parent.controls['biff'].value;

      const errors = {};
      if (goal && crit < goal) {
        errors['ltGoal'] = true;
      }
      if (biff && crit <= biff) {
        errors['lteBiff'] = true;
      }
      if (Object.keys(errors).length !== 0) {
        return errors;
      }
    }
    return null;
  }

  static validateBiff(control: FormControl): ValidationErrors {
    if (control.parent && control.parent.controls['complex-input'].value) {
      const goal = control.parent.controls['goal'].value;
      const crit = control.parent.controls['crit'].value;
      const biff = control.value;
      const errors = {};
      if (goal && biff >= goal) {
        errors['gteGoal'] = true;
      }
      if (crit && biff >= crit) {
        errors['gteCrit'] = true;
      }
      if (Object.keys(errors).length !== 0) {
        return errors;
      }
    }
    return null;
  }

  static validateComplexFields(group: FormGroup): ValidationErrors {
    if (group.controls['complex-input'].value && group.controls['dSize'].valid && group.controls['dNum'].valid) {
      const crit = group.controls['crit'].value;
      const biff = group.controls['biff'].value;
      const goal = group.controls['goal'].value;
      const errors = {};

      // validations start
      if (crit && biff && crit <= biff) {
        errors['critLtBiff'] = true;
      }

      if (crit && goal && goal > crit) {
        errors['goalGtCrit'] = true;
      }

      if (goal && biff && goal <= biff) {
        errors['goalLtBiff'] = true;
      }
      // validations end

      if (Object.keys(errors).length) {
        return errors;
      }
    }
    return null;
  }
}
