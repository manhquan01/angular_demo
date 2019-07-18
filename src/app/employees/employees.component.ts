import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { teams } from '../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
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
        console.log(`responsedEmployeeFromService = ${JSON.stringify(this.employees)}`);
      }
    );
  }

  // add new Employee
  // tslint:disable-next-line: variable-name
  addNewEmployee(name: string, team: string, score: number, id_employee: number): void {
    name = name.trim();
    team = team.trim();

    const newEmployee: Employee = new Employee();
    newEmployee.name = name;
    newEmployee.team = team;
    newEmployee.score = Number(score);
    newEmployee.id_employee = id_employee;

    this.employeeService.addNewEmployeeToServer(newEmployee).subscribe(
      insertedEmployee => this.employees.push(insertedEmployee)
    );
  }

  // creat Form to validate
  creatForm() {
    this.employeeFormGroup = this.formBuilder.group({
      name: ['', Validators.required, Validators.minLength(2)],
      team: [this.teams[0], Validators.required],
      score: [''],
      id_employee: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getAllEmployeeFromService();
    this.creatForm();
  }

}
