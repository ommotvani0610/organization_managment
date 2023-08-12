import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganizationsDataService, organizationDatatype } from 'src/app/services/organizations-data.service';

@Component({
  selector: 'app-organigation',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganigationComponent implements OnInit {
  organizationNameForm:FormGroup;

  constructor(private organizationdataservice:OrganizationsDataService ,private router:Router){
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.organizationNameForm = new FormGroup({
    'organizationName':new FormControl(null,[Validators.required])
  })
}

  addOrganization(){
    const organizationId = new Date().getTime();
    const organizationData:organizationDatatype = {organizationId,...this.organizationNameForm.value}
this.organizationdataservice.organizations.push(organizationData)
this.organizationdataservice.addOrganizations()
this.router.navigate(['OrganizationsDashboard'])
this.organizationNameForm.reset()

  }

  // uniqueOrganizationNameValidator(control:FormControl):{[s:string]:boolean} |null{
  //   if(this.organizationdataservice.organizations?.includes(control)){
  //     return {'oraganizationNameIsExit':true}
  //   }
  //   return null
  //  }

  //  forbiddenNames(control:FormControl):{[s:string]:boolean} {
  //   if(this.forbiddenUsersName?.indexOf(control?.value) === -1){
  // return {'nameIsForbidden':true}
  //   }
  // return null
  //  }

}
