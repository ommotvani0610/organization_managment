import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService, taskDataType, taskStatusType } from 'src/app/services/usersData/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  taskDetailsForm:FormGroup;
  activateUser:taskDataType;
  isEditable:number;
  index:number;
  task:taskDataType[]=[]
  taskstatus:taskStatusType;
  temp:number
  // cureentTaskd:number


  constructor(private router:Router ,private useservice:UserService ,private route:ActivatedRoute){
    const temp = this.useservice.taskDetails?.filter((ele) => ele.taskId === this.useservice.taskid)
    this.activateUser= temp![0]
    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.isEditable =  +queryParams['allowEdit']
        })
        console.log('this.isEditable : ', this.isEditable );
  }

  ngOnInit() {
    this.taskDetailsForm = new FormGroup({
      'tasktype':new FormControl(this.activateUser?.tasktype,Validators.required),
      'tasktitle':new FormControl(this.activateUser?.tasktitle,Validators.required),
      'taskdescription':new FormControl(this.activateUser?.taskdescription,Validators.required),
      'effort':new FormControl(this.activateUser?.effort,Validators.required),
      'estimation':new FormControl(this.activateUser?.estimation,Validators.required),
      'taskstatus':new FormControl(this.activateUser?.taskstatus,Validators.required),
      'Assign':new FormControl(this.activateUser?.Assign,Validators.required)
    })




  }

  onSubmit(){
    //  ?
    console.log("submitted")
    if (this.isEditable === 0) {
      const taskId = new Date().getTime()
      const taskDeatils = {taskId,...this.taskDetailsForm.value}
      // console.log('taskDeatils: ', taskDeatils);
      this.useservice.taskDetails?.push(taskDeatils)
      this.useservice.addtaskData()
    }
    else{
      console.log("updated")
      this.useservice.getTaskStatus()
      this.taskstatus = this.useservice?.taskstatus

     this.useservice.taskDetails = this.useservice.taskDetails?.map((ele) =>{
        if (ele.taskId === this.useservice.taskid) {
          return {taskId:ele.taskId ,...this.taskDetailsForm.value,}
        }
        else{
          return ele
        }
      })
      window.localStorage.setItem('tasks', JSON.stringify( this.useservice.taskDetails));
      this.useservice.addUserData()
    }
this.router.navigate(['/OrganizationsDashboard'])


  }


}
