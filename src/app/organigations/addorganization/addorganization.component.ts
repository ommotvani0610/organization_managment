import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addorganigation',
  templateUrl: './addorganization.component.html',
  styleUrls: ['./addorganization.component.css']
})
export class AddorganigationComponent {

  constructor(private router:Router){

  }
  addOrganization(){
    this.router.navigate(['addorganization'])
  }
}
