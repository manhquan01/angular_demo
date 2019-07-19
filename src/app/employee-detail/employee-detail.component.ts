import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  employee: Employee;
  employees: Employee[];
  editEmployee: Employee;

  // get One Employee From service by id
  getEmployeeFromServiceById(): void {
    // get id from route
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeFromServerById(id).subscribe(
      employee => this.employee = employee
    );
  }

  // delete Employee
  delete(id: number): void {
    this.employeeService.delete(id).subscribe(
      _ => {
        this.location.back();
      }
    );
  }

  geInforEdit(employee: Employee): void {
    this.editEmployee = employee;
    // console.log(`employeeEdit = ${JSON.stringify(this.editEmployee)}`);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getEmployeeFromServiceById();
  }

}
