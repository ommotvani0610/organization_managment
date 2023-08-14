import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserslistComponent } from './userslist/userslist.component';
import { UserComponent } from './userslist/user/user.component';
import { OrganigationComponent } from './organigations/organization/organization.component';
import { OrganizationslistComponent } from './organigations/organizationslist/organizationslist.component';
import { AddorganigationComponent } from './organigations/addorganization/addorganization.component';
import { TaskComponent } from './userslist/task/task.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserslistComponent,
    UserComponent,
    OrganigationComponent,
    OrganizationslistComponent,
    AddorganigationComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
