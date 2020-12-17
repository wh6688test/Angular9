import {Injectable} from '@angular/core';
import {ValidatorFn, AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormValidations {

  minValidator(minValue1: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        return  (!minValue1 ?
             null : (control.value && control.value.length >= minValue1) ? null : {invalidMinValue: true});
    };
  }

   patternValidator(pattern1: string): ValidatorFn {
      return (control: AbstractControl): {[key: string]: any} => {

        const regex1 = new RegExp(pattern1);
        return  (pattern1 === null ?
             null : regex1.test(control.value) ? null : {invalidPattern: true});
    };
  }

}
