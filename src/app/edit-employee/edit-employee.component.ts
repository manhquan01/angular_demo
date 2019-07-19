import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee';
import { teams } from '../models/employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee: Employee;

  teams = teams;

  constructor(
    private employeeService: EmployeeService,
    private location: Location
    ) { }

  // update Employee
  saveUpdate(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(() => this.location.back());
  }

  ngOnInit() {
  }

}
