import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, userDataType } from 'src/app/services/usersData/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  implements OnInit{
userDetailForm:FormGroup

constructor(private userdataservice:UserService ,private router:Router){

}

ngOnInit() {
  this.userDetailForm = new FormGroup({
    'username': new FormControl(null,Validators.required),
    'useremail':new FormControl(null,[Validators.required,Validators.email]),
    'userphonenumber':new FormControl(null,[Validators.required]),
    'userrole':new FormControl(null,[Validators.required])
  })
}

onSubmit(){
  let userId = new Date().getTime();
  let userData:userDataType ={userId,...this.userDetailForm.value}
this.userdataservice.userDetails?.push(userData)
this.userdataservice.addUserData()
this.router.navigate(['OrganizationsDashboard'])
}
}
