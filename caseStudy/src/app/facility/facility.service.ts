import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IService} from './model/IService';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private readonly API_FACILITY = 'http://localhost:3000/FacilityList';

  constructor(private http: HttpClient) { }

  getAllFacility(): Observable<IService[]> {
    return this.http.get<IService[]>(this.API_FACILITY);
  }
  deleteFacility(id: any) {
    return this.http.delete(`${this.API_FACILITY}/` + id);
  }
  findById(id: any) {
    return this.http.get<IService>(`${this.API_FACILITY}/` + id);
  }
}
