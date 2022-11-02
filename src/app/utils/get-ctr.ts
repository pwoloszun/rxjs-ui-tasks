import { AbstractControl } from '@angular/forms';
import { throwError } from './throw-error';

export function getCtrl(name: string, group: AbstractControl): AbstractControl {
  return group.get(name) || throwError(`Missing '${name}' form control`);
}
