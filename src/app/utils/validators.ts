import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const miValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (isNaN(value)) {
    return { notANumber: true };
  }
  const valueString = value.toString();

  if (valueString.length < 7 || valueString.length > 8) {
    return { invalidLength: true };
  }
  return null;
};

