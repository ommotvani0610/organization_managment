import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, taskDataType } from 'src/app/services/usersData/user.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  tasklist:taskDataType[]=[]
  tasktype:string[]=[]

  constructor(private router:Router ,private taskservice:UserService){
  const temp= this.taskservice.taskDetails.map((ele) => ele.taskstatus )
  this.tasktype = temp
  // this.tasktype.push(temp)
  this.tasklist = this.taskservice.taskDetails
  console.log(this.taskservice.taskDetails)
  }

  ngOnInit(): void {

  }


  addTask(){
    this.router.navigate(['task'])
    }

    edittask(id:number){
      console.log('id: ', id);
      this.taskservice.taskid=id
      this.router.navigate(['task','edit'],{queryParams:{'allowEdit':true}})
    }
}
