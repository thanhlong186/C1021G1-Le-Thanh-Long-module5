import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceCustomer} from '../service-customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customerTypeList: any = [];

  constructor(private router: Router,
              private active: ActivatedRoute,
              private customerService: ServiceCustomer) { }

  editFormCustomer = new FormGroup({
    id: new FormControl(''),
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

  ngOnInit(): void {
    this.customerService.getInfor(this.active.snapshot.params.id).subscribe(data =>{
        this.editFormCustomer.setValue(data);
    });
    this.customerService.getListTypeCustomer().subscribe(data => {
        this.customerTypeList = data;
    });
  }
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

}
