import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICustomer} from './model/ICustomer';
import {CustomerType} from './model/CustomerType';
import {MatDialogRef} from '@angular/material/dialog';

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
  updateCustomer(id: number, data: ICustomer) {
    return this.http.put<ICustomer[]>(`${this.API_URL}/${id}`, data);
  }
  searchCustomer(nameSearch: string) {
    return this.http.get<ICustomer[]>(`${this.API_URL}?` + 'name_like=' + nameSearch);
    // http://localhost:3000/customerList?name_like=tr
  }
  searchAllCustomer(keyword1: string, keyword2: string) {
    return this.http.get<ICustomer[]>(this.API_URL + '?typeCustomer.nameType_like=' + keyword1 + '&code_like=' + keyword2);
    // http://localhost:3000/customerList?typeCustomer.nameType_like=s
    }
    // openDialog(dialogName: string): MatDialogRef<any> {
    //   const chunk = await import(`../dialog/${dialogName}/${dialogName}.component`);
    //   const dialogComponent = Object.values(chunk)
    //
    //   }
    // }
}

