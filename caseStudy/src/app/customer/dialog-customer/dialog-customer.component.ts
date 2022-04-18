import {Component, Inject, OnInit} from '@angular/core';
import {ServiceCustomer} from '../service-customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ICustomer} from '../model/ICustomer';

@Component({
  selector: 'app-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  id: number;
  customers: ICustomer;

  constructor(private customerService: ServiceCustomer,
              public dialogRef: MatDialogRef<DialogCustomerComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private activated: ActivatedRoute)  {}
  customer: any = "";
  ngOnInit(): void {
    this.id =  this.activated.snapshot.params.id;
    console.log(this.data);
    this.customerService.getInfor(this.data).subscribe(data => {
      console.log(data);
        this.customer = data;
        this.viewForm.patchValue(this.customers)
    })
  }
  viewForm = new FormGroup({
  id: new FormControl(''),
  name: new FormControl(''),
  code: new FormControl(''),
  birthday: new FormControl(''),
  gender: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  idCard: new FormControl(''),
  address: new FormControl(''),
  customerType: new FormControl(''),

})

}
