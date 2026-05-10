import { AbstractControl } from '@angular/forms';

export function matchingPasswords(control: AbstractControl) {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value !== confirmPassword?.value ? { unmatchedPasswords: true } : null;
}

export function isDatePassed(control: AbstractControl) {
  const now = new Date();
  const dateToCompare = new Date(control.value);
  return now.getTime() > dateToCompare.getTime() ? { dateIsPassed: true } : null;
}
