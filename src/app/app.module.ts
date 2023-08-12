import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserslistComponent } from './userslist/userslist.component';
import { UserComponent } from './userslist/user/user.component';
import { OrganigationComponent } from './organigations/organization/organization.component';
import { OrganizationslistComponent } from './organigations/organizationslist/organizationslist.component';
import { AddorganigationComponent } from './organigations/addorganization/addorganization.component';
import { TaskComponent } from './userslist/task/task.component';
import { TasklistComponent } from './userslist/task/tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserComponent,
    OrganigationComponent,
    OrganizationslistComponent,
    AddorganigationComponent,
    TaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
