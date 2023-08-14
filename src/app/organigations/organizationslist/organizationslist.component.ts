import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { OrganizationsDataService, organizationDatatype } from 'src/app/services/organizations-data.service';
import { UserService, taskDataType, taskStatusType } from 'src/app/services/usersData/user.service';


@Component({
  selector: 'app-organizationslist',
  templateUrl: './organizationslist.component.html',
  styleUrls: ['./organizationslist.component.css']
})
export class OrganizationslistComponent implements OnInit{
  organizationList:organizationDatatype[];
  taskdata:taskDataType[];

  taskstatus:taskStatusType;

  constructor(private organizationdataservice:OrganizationsDataService,private router:Router,private userservice:UserService){
    this.userservice.getTaskStatus()
    this.taskstatus = this.userservice.taskstatus
  }

  ngOnInit(): void {
this.organizationList = this.organizationdataservice.organizations
  }

  addTask(){
    this.router.navigate(['task','edit'],{queryParams:{'allowEdit':0}})
  }

  edittask(id:number){
    this.userservice.taskid=id
    this.router.navigate(['task','edit'],{queryParams:{'allowEdit':1}})
  }




}
