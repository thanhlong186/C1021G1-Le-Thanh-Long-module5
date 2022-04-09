import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import { country } from '../country';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  createRegisterForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.createRegisterForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passWordGroup: new FormGroup({
      passwords: new FormControl('',[Validators.required,  Validators.minLength(6)]),
        confirmPasswords: new FormControl('',Validators.required)}, comparePassword),
      country: new FormControl('',[Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required, this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    });
    function comparePassword(check: AbstractControl) {
      const value = check.value;
      return (value.passwords === value.confirmPasswords) ? null :  {
        'passwordNotMatch':true
      };
    }
  }
  countryList: country[] = [
    new country('1', 'Đà Nẵng'),
    new country('2', 'Hà Nội'),
    new country('3', 'TP.Hồ Chí Minh'),
    new country('4', 'Bình Dương'),
    new country('5', 'Hải Phòng')
  ]

  onSubmit(createStudentForm: any) {
    this.createRegisterForm = createStudentForm.value;
  }
  checkAge(dayOfBirth: AbstractControl) {
    console.log(dayOfBirth.value);
    const birth = new Date(dayOfBirth.value);
    const birthday = Date.now() - birth.getTime() - 86400000;
    const time = new Date(birthday);
    console.log(time.getUTCFullYear());
    const age = time.getUTCFullYear() - 1970;
    console.log(age);
    if(age < 18) {
      return {'ageUnder': true}
    }
    return null;
  }

  get passWordGroup(){
    return this.createRegisterForm.get('passWordGroup')
  }

  get passwords() {
    return this.passWordGroup.get('passwords');
  }

  get confirmPasswords() {
    return this.passWordGroup.get('confirmPasswords');
  }


}
