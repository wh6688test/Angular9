import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {FormValidations} from '../shared/formValidations';
import {GroupsService} from '../services/groups.service';
import {ServiceResponseType, ServiceDataType, GroupAttributeType, MemberType, ConvertedResponseType} from '../services/GroupData';

@Component({
  selector: 'app-inputforms',
  templateUrl: './inputforms.component.html',
  styleUrls: ['./inputforms.component.scss']
})
export class InputformsComponent implements OnInit {

  inputForm: FormGroup;
  submitted = false;
  groups: ConvertedResponseType = {data: null, error:''};


  constructor(
     private fb: FormBuilder,
     private inputValidator: FormValidations, 
     private groupsService: GroupsService)
  { };

ngOnInit(): void {

      this.inputForm = this.fb.group({
          input1: ['', Validators.compose(
                      [Validators.required,
                       Validators.maxLength(10),
                       Validators.max(10),
                        this.inputValidator.minValidator(2),
                       this.inputValidator.patternValidator('^[a-zA-Z0-9_]+$'),
                      ])
           ],
           input2: ['', Validators.compose(
                     [
                      Validators.maxLength(10),
                      Validators.max(10),
                      this.inputValidator.minValidator(2),
                      ])

                  ],
      });
      
  }

get inputFormControl() {
    return this.inputForm.controls;
}

//to do return form is valid or not
get input1Field() {
    return this.inputFormControl.input1;
}
get input2Field() {
    return this.inputFormControl.input2;
}

getGroups(inputAttr1: string, inputAttr2: string) {
   this.groupsService.getGroups(inputAttr1, inputAttr2)
     .subscribe( (g:ConvertedResponseType) => {
       
       this.groups = g;
       
       /** 
       if (!g) {
         this.groups= {code: -1, data:[], error:''};
         return;
       }**/
       /** 
       if (!g.data) {
         this.groups = {data:null, error:g.error};
         return;
       }**/
       /** 
       let responseData:ServiceDataType[]=((g && g.data)?g.data:[]);
       responseData=responseData.filter( (k:ServiceDataType)  => (inputAttr1 + " " + inputAttr2).includes(k.group_attribute.attr1)
                         && (inputAttr1 + " " + inputAttr2).includes(k.group_attribute.attr2)
       );
                  
        if (!!responseData && responseData.length>0)  {
              responseData=Array.from(new Set(responseData));
        }
                 
        let gResp:string[] = responseData.map( (groupData:ServiceDataType) => {
                  //return {code: g.code, data: responseData, error:g.error});

            return JSON.stringify(
                {group_id:groupData.group_id.trim(), 
                 attr1: groupData.group_attribute.attr1.trim(), 
                 attr2: groupData.group_attribute.attr2.trim(), 
                 member_count: (groupData.members && groupData.members.length !== 0)?groupData.members.length:0,
                }
            );
        });**/
        //this.groups = {code:g.code, data:gResp, error:''};
                   //return {code: g.code, data: gResp, error: g.error};
     })
   
}

onSubmit() {
  
   this.submitted = true;
   if (this.inputForm.valid) {
     this.getGroups(this.input1Field.value, this.input2Field.value);
     //alert(this.inputForm.controls.input2.valid);
   }
   this.submitted = false;

}

}
