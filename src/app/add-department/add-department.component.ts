import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  constructor(
    private department: DepartmentService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  addDepartment(data: NgForm) {
    console.log(data);
    this.department
      .addDepartment(data)
      .subscribe((response) => console.log(response));
    alert('Added successfully');
  }

  goBack() {
    this.location.back();
  }
}
