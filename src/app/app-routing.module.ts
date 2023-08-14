
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Params } from '@angular/router';
import { UserComponent } from './userslist/user/user.component';
import { OrganigationComponent } from './organigations/organization/organization.component';
import { OrganizationslistComponent } from './organigations/organizationslist/organizationslist.component';
import { AddorganigationComponent } from './organigations/addorganization/addorganization.component';
import { TaskComponent } from './userslist/task/task.component';
import { AppComponent } from './app.component';



const routes:Routes=[
  {path:'' ,redirectTo:'home' ,pathMatch:'full'},
  {path:'home' ,component:AddorganigationComponent},
  {path:'addorganization',component:OrganigationComponent},
  {path:'OrganizationsDashboard', component:OrganizationslistComponent},
  {path:'user',component:UserComponent},
  {path:'task/edit',component:TaskComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
