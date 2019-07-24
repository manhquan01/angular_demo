import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { teams } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
@Injectable()
export class EmployeesComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
  ) { }

  employeeFormGroup: FormGroup;

  employees: Employee[];

  teams = teams;

  // get all Employee form service
  getAllEmployeeFromService(): void {
    this.employeeService.getAllEmployeeFromServer().subscribe(
      (responsedEmployee) => {
        this.employees = responsedEmployee;
        // console.log(`responsedEmployeeFromService = ${JSON.stringify(this.employees)}`);
      }
    );
  }

  // creat Form to validate
  creatForm() {
    this.employeeFormGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      team: [this.teams[0], Validators.required],
      score: [''],
      id_employee: ['', Validators.required]
    });
  }

  onClickSubmit(employee): void {
    const newEmployee: Employee = new Employee();
    newEmployee.name = employee.name.trim();
    newEmployee.team = employee.team;
    newEmployee.score = Number(employee.score);
    newEmployee.id_employee = employee.id_employee;

    this.employeeService.addNewEmployeeToServer(newEmployee).subscribe(
      insertedEmployee => this.employees.push(insertedEmployee)
    );
  }

  ngOnInit() {
    this.getAllEmployeeFromService();
    this.creatForm();
  }

}
