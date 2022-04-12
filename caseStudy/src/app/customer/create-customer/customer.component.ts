import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceCustomer} from '../service-customer';
import {CustomerType} from '../model/CustomerType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  // createCustomerForm: FormGroup;
  listType: CustomerType[];

  constructor(private serviceCustomer: ServiceCustomer, private router: Router) {
  }


  ngOnInit(): void {
    this.getListType();
  }

  createCustomerForm = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.pattern(/^(KH)(-)[0-9]{4}$/)]),
    name: new FormControl('', [Validators.required,]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
    emails: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    typeCustomer: new FormControl('', [Validators.required]),
  });

  // onSubmit(createCustomerForm: FormGroup) {
  //   this.createCustomerForm = createCustomerForm.value;
  // this.serviceCustomer.createCustomer(this.createCustomerForm.value).subscribe(() => {
  //   console.log("đã lấy được data");
  // })
  //   console.log(createCustomerForm.value);
  // }

  checkAge(dayOfBirth: AbstractControl) {
    console.log(dayOfBirth.value);
    const birth = new Date(dayOfBirth.value);
    const birthday = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthday);
    console.log(time.getUTCFullYear());
    const age = time.getUTCFullYear() - 1970;
    console.log(age);
    if (age < 18) {
      return {'ageUnder': true};
    }
    return null;
  }

  getListType() {
    this.serviceCustomer.getListTypeCustomer().subscribe(data => {
      this.listType = data;
    });
  }

  saveCustomer() {
    if (!this.createCustomerForm.invalid) {
      this.serviceCustomer.createCustomer(this.createCustomerForm.value).subscribe(() => {
        console.log('đã lấy được data');
        this.router.navigateByUrl("customer");
      });
      console.log(this.createCustomerForm.value);
    }
  }
}
