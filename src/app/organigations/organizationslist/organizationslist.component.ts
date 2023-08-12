import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { OrganizationsDataService, organizationDatatype } from 'src/app/services/organizations-data.service';
import { UserService, taskDataType } from 'src/app/services/usersData/user.service';


@Component({
  selector: 'app-organizationslist',
  templateUrl: './organizationslist.component.html',
  styleUrls: ['./organizationslist.component.css']
})
export class OrganizationslistComponent implements OnInit{
  organizationList:organizationDatatype[];
  taskdata:taskDataType[];
  tasktype:number[]=[]

  constructor(private organizationdataservice:OrganizationsDataService,private router:Router,private userservice:UserService){
//    let test =   userservice.taskDetails;
// let result = test.map((ele) => console.log(ele.taskstatus))
const temp= this.userservice.taskDetails.map((ele) => {

 if(ele.taskstatus==='inprogress'){
this.tasktype.push(1)
 }
 else if(ele.taskstatus === 'done'){
  this.tasktype.push(2)
 }
 else{
  this.tasktype.push(0)
 }
} )
// this.tasktype = temp
// console.log('this.tasktype: ', this.tasktype);


  }

  ngOnInit(): void {
this.organizationList = this.organizationdataservice.organizations
  }

  addTask(){
this.router.navigate(['task','edit'],{queryParams:{'allowEdit':false}})
  }




}
