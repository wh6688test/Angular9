import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {FormValidationsService} from '../services/formValidations.service'

@Component({
  selector: 'app-inputforms',
  templateUrl: './inputforms.component.html',
  styleUrls: ['./inputforms.component.scss']
})
export class InputformsComponent implements OnInit {

  inputForm: FormGroup;
  submitted = false;

  constructor(
     private fb: FormBuilder,
     private inputValidator: FormValidationsService) {

  }

ngOnInit(): void {
      this.inputForm = this.fb.group({
          input1: ['', Validators.compose(
                      [Validators.required,
                        this.inputValidator.patternValidator('mypattern'),
                        this.inputValidator.minValidator(2),
                        this.inputValidator.maxValidator(10),
                      ]
                   )],
           input2: ['', Validators.compose([this.inputValidator.minValidator(2)])],
      });
  }

get inputFormControl() {
    return this.inputForm.controls;
};

onSubmit() {
   this.submitted = true;
   if (this.inputForm.valid) {
     //call the api service
     alert('hello');
   }
   this.submitted = false;

}

}
