import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IEmployee} from './model/IEmployee';
import {PositionList} from './model/PositionList';
import {EducationDegreeList} from './model/EducationDegreeList';
import {DivisionList} from './model/DivisionList';

@Injectable({providedIn: 'root'})
export class EmployeeServiceService {

  private readonly EMPLOYEE_URL = 'http://localhost:3000/employeeList';
  private readonly POSITION_URL = 'http://localhost:3000/positionList';
  private readonly EDUCATION_URL = 'http://localhost:3000/educationList';
  private readonly DIVISION_URL = 'http://localhost:3000/divisionList';

  constructor(private http:HttpClient) { }

  getListEmployee() {
    return this.http.get<IEmployee[]>(this.EMPLOYEE_URL);
  }
  getListPosition() {
    return this.http.get<PositionList[]>(this.POSITION_URL);
  }
  getListEducation() {
    return this.http.get<EducationDegreeList[]>(this.EDUCATION_URL);
  }
  getListDivision() {
    return this.http.get<DivisionList[]>(this.DIVISION_URL);
  }

  getInforEmployee(id: number) {
    return this.http.get<IEmployee>(`${this.EMPLOYEE_URL}/` + id);
  }
  createEmployee(data) {
    return this.http.post<IEmployee>(this.EMPLOYEE_URL, data);
  }
  deleteEmployee(idEmployee: number) {
    return this.http.delete(`${this.EMPLOYEE_URL}/` + idEmployee);
  }
}
