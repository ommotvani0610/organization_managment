import { Injectable, OnInit } from '@angular/core';

export interface organizationDatatype{
  organizationId:number,
  organizationName:string
}

@Injectable({
  providedIn: 'root'
})
export class OrganizationsDataService  implements OnInit{
organizations:organizationDatatype[]=[]

  constructor() {
    const organization = JSON.parse(localStorage.getItem('Organization')!)

    this.organizations = Object?.values(organization)
    

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  addOrganizations(){
    window.localStorage.setItem('Organization', JSON.stringify(this.organizations));
  }


}
