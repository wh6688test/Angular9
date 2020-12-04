import { Injectable } from '@angular/core';
import {ValidatorFn, AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationsService {

  constructor() { }

  patternValidator(pattern1: string): ValidatorFn {
    return (input1: AbstractControl): {[key: string]: boolean} => {
        const regex1 = new RegExp(pattern1);
        const value1 = input1.value;
        return (pattern1 === null ?
             null : (value1 !== null && value1.trim().length !== 0) ?
             null : regex1.test(value1) ? null : {invalidPattern: true});
    };
  }

  maxValidator(maxValue1: number): ValidatorFn {
    return (input1: AbstractControl): {[key: string]: boolean} => {
         const value1 = input1.value;
         return (maxValue1 === null ?
             null : (value1 !== null && value1.trim().length !== 0) ?
             null : value1 > maxValue1 ? null : {invalidMinValue: true});
    };
  }

  minValidator(minValue1: number): ValidatorFn {
    return (input1: AbstractControl): {[key: string]: boolean} => {
         const value1 = input1.value;
         return (minValue1 === null ?
             null : (value1 !== null && value1.trim().length !== 0) ?
             null : value1 < minValue1 ? null : {invalidMinValue: true});
    };
  }

  requiredValidator(requiredValue1: boolean): ValidatorFn {
    return (input1: AbstractControl): {[key: string]: boolean} => {
         const value1 = input1.value;
         return (requiredValue1 === null ?
             null : (value1 !== null && value1.trim().length !== 0) ?
             null : {invalidRequiredValue: true});
    };
  }

}
