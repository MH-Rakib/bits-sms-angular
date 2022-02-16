import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { CounterComponent } from './counter/counter.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    HomeComponent,
    AddDepartmentComponent,
    CounterComponent,
    EditDepartmentComponent,
    ViewDepartmentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
