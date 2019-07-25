import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../employee.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  // let service: EmployeeService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [ EmployeeService ],
      declarations: [ EmployeesComponent ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    // create an instance of EmployeesComponent
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
