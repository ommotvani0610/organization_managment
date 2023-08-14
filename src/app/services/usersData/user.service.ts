// import { taskDataType } from 'src/app/services/usersData/user.service';
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

export interface taskStatusType{
  New:taskDataType[],
    Inprogress:taskDataType[],
    Done:taskDataType[]
}

@Injectable({
  providedIn: 'root'
})
export class UserService  implements OnInit{
  userDetails:userDataType[]=[];
  taskDetails:taskDataType[]=[]
  taskid:number=0;
  taskstatus:taskStatusType;


  constructor() {
    this.userDetails= JSON.parse(localStorage.getItem('users')!)
    this.taskDetails = JSON.parse(localStorage.getItem('tasks')!)
  }

  ngOnInit(): void {

  }

  addUserData(){
    window.localStorage.setItem('users', JSON.stringify(this.userDetails));
  }

  addtaskData(){
    window.localStorage.setItem('tasks', JSON.stringify(this.taskDetails));
  }

  getTaskStatus(){
    this.taskstatus= {

  New:this.taskDetails?.filter((ele) => ele.taskstatus == 'New'),
  Inprogress:this.taskDetails.filter((ele) => ele.taskstatus == 'Inprogress'),
  Done:this.taskDetails.filter((ele) => ele.taskstatus === 'Done' )
}
  }

}
