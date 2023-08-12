import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService, taskDataType } from 'src/app/services/usersData/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  taskDetailsForm:FormGroup;
  activateUser:taskDataType;
  isEditable:boolean=false
  index:number;
  task:taskDataType[]=[]


  constructor(private router:Router ,private useservice:UserService ,private route:ActivatedRoute){
    const temp = this.useservice.taskDetails.filter((ele) => ele.taskId === this.useservice.taskid)
    this.activateUser= temp[0]
    const getQueryParam = this.route.snapshot.queryParams
   this.isEditable = getQueryParam['allowEdit']
   console.log('this.isEditable: ', this.isEditable);


 this.index = this.useservice.taskDetails.findIndex(obj => {
    return obj.taskId ===this.useservice.taskid ;
  });

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
    console.log("sub")
// this.router.navigate(['/OrganizationsDashboard'])
let taskId = new Date().getTime();
const taskDeatils:taskDataType = {taskId,...this.taskDetailsForm.value}
this.useservice.taskDetails.push(taskDeatils)
this.useservice.addtaskData()
// this.router.navigate(['OrganizationsDashboard'])
// this.taskDetailsForm.reset()
  }

  updatTaskDetail(){
    console.log("updated")
    const id = this.useservice.taskid
    const updatedUserData = {taskId:id,...this.taskDetailsForm?.value}
    // console.log('updatedUserData: ', updatedUserData);
this.useservice.taskDetails.splice(this.index,1,updatedUserData)
    console.log('this.useservice.taskDetails: ', this.useservice.taskDetails);
    // console.log(' this.useservice.taskDetails: ',  this.useservice.taskDetails);
  }
}
