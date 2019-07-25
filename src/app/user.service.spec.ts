import { TestBed, getTestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserApi } from './data/user-api';

describe('UserService', () => {
  let updateData: UserApi;
  let addData: UserApi;
  let userService: UserService;
  let httpMock: HttpTestingController;
  const mockUsers = [
    {id: 1, name: "quan", email: "quan@gmail.com", phoneNumber: '123456789'},
    {id: 2, name: "quan1", email: "quan1@gmail.com", phoneNumber: '987654321'}
  ];
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService
      ],
      imports: [
        HttpClientTestingModule,
      ]
    });
    httpMock = getTestBed().get(HttpTestingController);
    userService = getTestBed().get(UserService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should get all user form api', () => {
    userService.getUsersFromApi().subscribe(users =>{
      expect(users).toEqual(mockUsers);
      expect(users.length).toEqual(2);
    });

    const req = httpMock.expectOne(`${userService.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should get user from api by id', () => {
    userService.getUserApi(mockUsers[0].id).subscribe(user => {
      expect(user).toEqual(mockUsers[0]);
    });

    const req = httpMock.expectOne(`${userService.apiUrl + '/' + mockUsers[0].id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers[0]);
  });

  it('should update user from api', () => {
    updateData = { id:1, name: 'quan-update', email: 'quan-update@gmail.com', phoneNumber: '12123123132'}
    userService.updateUserApi(updateData).subscribe(user => {
      expect(user).toEqual(updateData);
    })

    const req = httpMock.expectOne(`${userService.apiUrl + '/' + mockUsers[0].id}`);
    expect(req.request.method).toEqual('PUT');
    req.flush(updateData);
  });

  it('should add user by api', () => {
    addData = {id: 3, name: 'quan-update', email: 'quan-update@gmail.com', phoneNumber: '12123123132'}
    userService.addUserApi(addData).subscribe(user => {
      expect(user).toEqual(addData);
    });

    const req = httpMock.expectOne(`${userService.apiUrl}`);
    expect(req.request.method).toEqual('POST');
    req.flush(addData);
  });

  it('should delete user from api by id', () => {
    userService.deleteUserApi(mockUsers[0].id).subscribe(user => {
      expect(user).toEqual(mockUsers[0]);
    });

    const req = httpMock.expectOne(`${userService.apiUrl + '/' + mockUsers[0].id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(mockUsers[0]);
  });
});

