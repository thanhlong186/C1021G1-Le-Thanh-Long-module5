import {Component, OnInit} from '@angular/core';
import {ICustomer} from '../model/ICustomer';

import {ServiceCustomer} from '../service-customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: ICustomer[];
  customer: ICustomer;
  p: number = 1;
  // searchName: any = "";
  // customers: any = [];

  constructor(private customerService: ServiceCustomer) {
  }

  ngOnInit(): void {
    this.loadData();

  }

  loadData() {
    this.customerService.getListCustomer().subscribe(data => {
      this.customerList = data;
      console.log(data);
      console.log('da lay duoc data');
    }, error => {
      console.log('co loi khi lay data');
    });
  }
  getInfor(id: number) {
    this.customerService.getInfor(id).subscribe(data => {
      this.customer = data;
    })
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe(() => {
      console.log("Da xoa du lieu");
      this.loadData();
    })
  }

  searchByName(value) {
    this.customerService.searchCustomer(value).subscribe(data => {
      this.customerList = data;
      console.log(this.customerList);
      this.p=1;
    });
  }
  searchAll(type, code) {
    this.customerService.searchAllCustomer(type, code).subscribe(data => {
      this.customerList =data;
      console.log(this.customerList);
      this.p = 1;
    })
  }
}
