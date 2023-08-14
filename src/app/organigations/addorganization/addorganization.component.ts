import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationsDataService, organizationDatatype } from 'src/app/services/organizations-data.service';

@Component({
  selector: 'app-addorganigation',
  templateUrl: './addorganization.component.html',
  styleUrls: ['./addorganization.component.css']
})
export class AddorganigationComponent {
  organizations:organizationDatatype[];

  constructor(private router:Router ,private organizationservice:OrganizationsDataService){
this.organizations=this.organizationservice.organizations
  }
  addOrganization(){
    this.router.navigate(['addorganization'])
  }
}
