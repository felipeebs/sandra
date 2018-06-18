import { FormControl } from '@angular/forms';

export class SandraValidators {
  static valueLtSize(control: FormControl): {[s: string ]: boolean} {
    if (control.dirty) {
      const size = control.parent.controls['dSize'].value;
      if (size && control.value > size) {
        return { 'gtSize': true };
      }
    }
    return null;
  }

  static validateGoal(control: FormControl): {[s: string ]: boolean} {
    if (control.parent) {
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

  static validateCrit(control: FormControl): {[s: string ]: boolean} {
    if (control.parent) {
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

  static validateBiff(control: FormControl): {[s: string ]: boolean} {
    if (control.parent) {
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
}
