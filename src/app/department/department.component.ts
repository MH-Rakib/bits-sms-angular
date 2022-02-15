import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Department } from '../model/department.model';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
})
export class DepartmentComponent implements OnInit {
  departments: any = [];

  constructor(
    private department: DepartmentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  deleteDepartmentById(id: any) {
    this.department.deleteDepartment(id).subscribe((response) => {
      alert('Deleted successfully');
      this.getDepartments();
    });
  }

  getDepartments() {
    this.department.getDepartments().subscribe((data) => {
      console.log(data);
      this.departments = data;
    });
  }
}
