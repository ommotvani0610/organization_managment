import { UserDataService } from './../../../../../contactmanager/src/app/services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, userDataType } from '../services/usersData/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit{
  userlist:userDataType[]=[]

  constructor(private router:Router ,private userservice:UserService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
this.userlist = this.userservice.userDetails

  }
  addUsers(){
this.router.navigate(['user'])
  }
}
