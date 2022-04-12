import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BodyComponent} from './body/body.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {EmployeeComponent} from './employee/list-employee/employee.component';
import {EditServiceComponent} from './service/edit-service/edit-service.component';

import {CustomerComponent} from './customer/create-customer/customer.component';
import {ContractComponent} from './contract/list-contract/contract.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {LoginComponent} from './navbar/login/login.component';
import {UpdateCustomerComponent} from './customer/update-customer/update-customer.component';





const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'home', component: BodyComponent},
  {path: 'service', component: ListServiceComponent},
  {path: 'edit-service', component: EditServiceComponent},
  {path: 'customer', component: ListCustomerComponent},
  {path: 'create-customer', component: CustomerComponent},
  {path: 'edit-customer/:id', component: UpdateCustomerComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'contract', component: ContractComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
