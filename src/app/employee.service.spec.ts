import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Employee } from './models/employee';

// mock data to test
const mockEmployees =
[
  {
    id: 1,
    name: 'Nguyen Duy Su',
    team: 'PHP',
    score: 500,
    id_employee: 3349
  },
  {
    id: 2,
    name: 'Luu Nhan Cuong',
    team: 'C#',
    score: 500,
    id_employee: 3340
  }
] as Employee[];

describe('EmployeeService', () => {
  let service: EmployeeService;
  // tslint:disable-next-line: prefer-const
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.get(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });


  describe('#getAllEmployeeFromServer()', () => {
    it('returned Observable should match the right data', () => {
      service.getAllEmployeeFromServer().subscribe(employees => {
        expect(employees[0].id).toEqual(mockEmployees[0].id);
        expect(employees[0].name).toEqual(mockEmployees[0].name);
        expect(employees[0].team).toEqual(mockEmployees[0].team);
        expect(employees[0].score).toEqual(mockEmployees[0].score);
        expect(employees[0].id_employee).toEqual(mockEmployees[0].id_employee);

        expect(employees[1].id).toEqual(mockEmployees[1].id);
        expect(employees[1].name).toEqual(mockEmployees[1].name);
        expect(employees[1].team).toEqual(mockEmployees[1].team);
        expect(employees[1].score).toEqual(mockEmployees[1].score);
        expect(employees[1].id_employee).toEqual(mockEmployees[1].id_employee);

        expect(employees.length).toEqual(mockEmployees.length);
      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}`);

      expect(req.request.method).toBe('GET');

      // set response is mock data (mockEmployees)
      req.flush(mockEmployees);
    });
  });

  describe('#getEmployeeFromServerById(id)', () => {
    it('returned Observable with id should match the right data', () => {
      service.getEmployeeFromServerById(mockEmployees[0].id).subscribe(employee => {
        expect(employee).toEqual(mockEmployees[0]);
      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}/${mockEmployees[0].id}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockEmployees[0]);
    });
  });

  describe('#addNewEmployeeToServer()', () => {
    it('should add new Employee', () => {
      service.addNewEmployeeToServer(mockEmployees[0]).subscribe(newEmployee => {
        expect(newEmployee).toEqual(mockEmployees[0]);
      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}`);

      expect(req.request.method).toBe('POST');

      req.flush(mockEmployees[0]);
    });
  });

  describe('#delete() ', () => {
    it('should delete Employee by id', () => {
      const id = mockEmployees[0].id;
      service.delete(id).subscribe(employeeDelete => {
        expect(employeeDelete.id).toEqual(mockEmployees[0].id);
      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}/${id}`);

      expect(req.request.method).toBe('DELETE');

      req.flush(mockEmployees[0]);
    });
  });

  describe('#updateEmployee()', () => {
    it('updated Observable should match right data', () => {
      const id = mockEmployees[0].id;
      service.updateEmployee(mockEmployees[0]).subscribe(updatedEmployee => {
        expect(updatedEmployee).toEqual(mockEmployees[0]);
      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}/${id}`);

      expect(req.request.method).toBe('PUT');

      req.flush(mockEmployees[0]);
    });
  });

  it('should return 0 if input is negative', () => {
    service = TestBed.get(EmployeeService);
    expect(service.compute(-1)).toEqual(0);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
});
