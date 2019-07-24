import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;
  // tslint:disable-next-line: prefer-const
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService, HttpClient, HttpHandler],
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
      // mock data to test
      const mockEmployees =
      [
        {
          name: 'Nguyen Duy Su',
          team: 'PHP',
          score: 500,
          id_employee: 3349
        },
        {
          name: 'Luu Nhan Cuong',
          team: 'C#',
          score: 500,
          id_employee: 3340
        }
      ];

      service.getAllEmployeeFromServer().subscribe(employees => {
        expect(employees[0].name).toEqual('Nguyen Duy Su');
        expect(employees[0].team).toEqual('PHP');
        expect(employees[0].score).toEqual(500);
        expect(employees[0].id_employee).toEqual(3349);

        expect(employees[1].name).toEqual('Luu Nhan Cuong');
        expect(employees[1].team).toEqual('C#');
        expect(employees[1].score).toEqual(500);
        expect(employees[1].id_employee).toEqual(3340);

      });

      const req = httpTestingController.expectOne(`${service.urlEmployee}`);
      // const req = httpTestingController.expectOne(`${service.urlToTest}/${service.urlEmployeeTest}`);
      console.log('haha', req.request.url);
      expect(req.request.method).toBe('GET');

      // set response is mock data (mockEmployees)
      req.flush(mockEmployees);
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
