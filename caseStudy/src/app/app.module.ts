import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CustomerComponent } from './customer/create-customer/customer.component';
import { ListCustomerComponent } from './customer/list-customer/list-customer.component';
import { NavComponent } from './navbar/nav/nav.component';
import { ListServiceComponent } from './service/list-service/list-service.component';
import { EmployeeComponent } from './employee/list-employee/employee.component';
import { EditServiceComponent } from './service/edit-service/edit-service.component';
import { CreateServiceComponent } from './service/create-service/create-service.component';
import { ContractComponent } from './contract/list-contract/contract.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { LoginComponent } from './navbar/login/login.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';


function MAT_SNACK_BAR_DEFAULT_OPTIONS() {

}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CustomerComponent,
    ListCustomerComponent,
    NavComponent,
    ListServiceComponent,
    EmployeeComponent,
    EditServiceComponent,
    CreateServiceComponent,
    ContractComponent,
    CreateEmployeeComponent,
    LoginComponent,
    UpdateCustomerComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
