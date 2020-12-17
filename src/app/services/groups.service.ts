import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

import {Observable, throwError, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {ServiceResponseType, ServiceDataType, ConvertedResponseType, GroupType} from './GroupData';

import {AppConfigService} from './app-config.service';

  
@Injectable()
export class GroupsService {

  groupUrl = "/groups/";
  
  constructor(private http: HttpClient) { 

  }

  getGroups(inputAttr1:string, inputAttr2:string): Observable<ConvertedResponseType> {
  return this.http.get<ServiceDataType[]>(this.groupUrl)
     .pipe(
          
          map<ServiceDataType[], ConvertedResponseType>(responseData => {
            if (!responseData || responseData.length === 0) {
                  return {data: null, error : ''};
                }
                
            //return {data:responseData, error:''};
         // }  
       responseData=responseData.filter( (k:ServiceDataType)  => (inputAttr1 + " " + inputAttr2).includes(k.group_attribute.attr1)
                         && (inputAttr1 + " " + inputAttr2).includes(k.group_attribute.attr2));
                  
        if (!!responseData && responseData.length>0)  {
              responseData=Array.from(new Set(responseData));
        }
                 
        let returnedData:GroupType[] = responseData.map( (groupData:ServiceDataType) =>  {
                
                  //return {code: g.code, data: responseData, error:g.error});
                return JSON.parse(JSON.stringify({
                  group_id:groupData.group_id.trim(),
                  attr1: groupData.group_attribute.attr1.trim(),
                  attr2: groupData.group_attribute.attr2.trim(),
                  member_count: 
                    (groupData && groupData.members && groupData.members.length !== 0)
                       ?groupData.members.length:0}));
        });

        return {data : returnedData, error : ''};
         
          }),
          catchError(error1 => of({data:null, error:'General Server Error'}))
          //end of pipe
      );
   }
}
