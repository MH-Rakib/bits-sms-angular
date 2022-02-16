import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';

const routes: Routes = [
  { path: 'department', component: DepartmentComponent, pathMatch: 'full' },
  { path: 'department/addDepartment', component: AddDepartmentComponent },
  {
    path: 'department/editDepartment/:id',
    component: EditDepartmentComponent,
  },
  {
    path: 'department/view/:id',
    component: ViewDepartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
