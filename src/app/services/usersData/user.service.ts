import { async } from '@angular/core/testing';
import { Injectable, OnInit } from '@angular/core';
import { UserType } from 'src/app/userslist/usertype';
import { Subject } from 'rxjs';

export interface userDataType{
  userId:number,
   username:string,
   useremail:string,
   userphonenumber:number | string,
    userrole:string
}

export interface taskDataType{
  Assign:string,
 effort:number |string,
  estimation:number |string,
  taskId:number,
  taskdescription:string,
  taskstatus:string,
  tasktitle:string
  tasktype:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService  implements OnInit{
// userdata:UserType["userDeatailTypes"][];
  userDetails:userDataType[]=[];
  taskDetails:taskDataType[]=[]
  taskid:number=0;

  constructor() {


    const users = JSON.parse(localStorage.getItem('users')!)
    this.userDetails = Object?.values(users)

    const tasks = JSON.parse(localStorage.getItem('tasks')!)
    this.taskDetails = Object?.values(tasks)
    if (this.taskDetails.length >0) {
      this.taskDetails = Object?.values(tasks)
    }



  }

  ngOnInit(): void {

  }

  addUserData(){
    window.localStorage.setItem('users', JSON.stringify(this.userDetails));
    // console.log('this.userDetails: ', this.userDetails);
  }

  addtaskData(){
    window.localStorage.setItem('tasks', JSON.stringify(this.taskDetails));
  }
}
