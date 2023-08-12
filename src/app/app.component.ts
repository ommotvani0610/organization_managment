import { Component ,OnInit} from '@angular/core';
import {FormGroup ,FormControl,Validators} from '@angular/forms'
import { OrganizationsDataService } from './services/organizations-data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'organization-usermanagement-system';
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





}
