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
import { ListServiceComponent } from './facility/list-service/list-service.component';
import { EmployeeComponent } from './employee/list-employee/employee.component';
import { EditServiceComponent } from './facility/edit-service/edit-service.component';
import { CreateServiceComponent } from './facility/create-service/create-service.component';
import { ContractComponent } from './contract/list-contract/contract.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { LoginComponent } from './navbar/login/login.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import {MatIconModule} from '@angular/material/icon';
import { ContractRoutingModule } from './contract/contract-routing.module';
import { RoomComponent } from './facility/room/room.component';
import { VillaComponent } from './facility/villa/villa.component';
import { HouseComponent } from './facility/house/house.component';
import { DialogCustomerComponent } from './customer/dialog-customer/dialog-customer.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


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
    RoomComponent,
    VillaComponent,
    HouseComponent,
    DialogCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    ContractRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
