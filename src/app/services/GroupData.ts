

//converted group type needed for UI display
export type GroupType = {
   group_id:string;
   attr1: string;
   attr2:string;
   member_count?:number;
};

//converted service api responses needed for UI display : data has been stringified


export type ConvertedResponseType = {
   error?:string;
   data?:GroupType[];
}

//original getGroups() api returned response type
export type ServiceResponseType = {
   error?:string;
   data?: ServiceDataType[];
};

//data part of the original api response data
export type ServiceDataType = {
   group_id:string;
   group_attribute:GroupAttributeType;
   members?:MemberType[];
};

//part of the response group data
export type GroupAttributeType = {
   attr1:string;
   attr2:string;
}

//part of the response group data
export type MemberType = {
   member_id: string;
   rating:number;
}
