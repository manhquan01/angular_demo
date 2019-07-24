import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from '../employee.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  // let service: EmployeeService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      providers: [ EmployeeService ],
      declarations: [ EmployeesComponent ]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('#getAllEmployeeFromServer should return value from observable component', (done: DoneFn) => {
  //   service = TestBed.get(EmployeeService);
  //   service.getAllEmployeeFromServer().subscribe(
  //     (value) => {
  //       expect(value).toEqual(new Array());
  //       done();
  //     }
  //   );
  // });
});
