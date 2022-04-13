import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICustomer} from './model/ICustomer';
import {CustomerType} from './model/CustomerType';

@Injectable({providedIn: 'root'})
export class ServiceCustomer {

  private readonly API_URL = 'http://localhost:3000/customerList';
  private readonly TYPE_URL = 'http://localhost:3000/customerTypeList';


  constructor(private http:HttpClient) {

  }

  getListCustomer(){
    return this.http.get<ICustomer[]>(this.API_URL);
  }
  deleteCustomer(idCustomer: number){
    return this.http.delete(`${this.API_URL}/` + idCustomer);
  }
  getInfor(id: number) {
    return this.http.get<ICustomer>(`${this.API_URL}/` + id);
  }
  getListTypeCustomer(){
    return this.http.get<CustomerType[]>(this.TYPE_URL);
  }
  createCustomer(data){
    return this.http.post<ICustomer>(this.API_URL, data);
  }
  updateCustomer(id, data) {
    return this.http.put(`${this.API_URL}/${id}`, data);
  }
}
