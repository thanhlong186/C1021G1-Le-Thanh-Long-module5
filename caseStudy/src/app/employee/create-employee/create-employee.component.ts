import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {PositionList} from '../model/PositionList';
import {EducationDegreeList} from '../model/EducationDegreeList';
import {DivisionList} from '../model/DivisionList';
import {EmployeeServiceService} from '../employee-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // createEmployeeForm: FormGroup;
  positionType: PositionList[];
  educationType: EducationDegreeList[];
  divisionType: DivisionList[];

  constructor(private employeeService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getPositionType();
    this.getEducationType();
    this.getDivisionType();
  }
    createEmployeeForm = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAges]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('',[Validators.required, Validators.min(0)]),
    position: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
  });
  getPositionType() {
    this.employeeService.getListPosition().subscribe(data =>{
      this.positionType = data;
    })
  }
  getEducationType() {
    this.employeeService.getListEducation().subscribe(data =>{
      this.educationType = data;
    })
  }
  getDivisionType() {
    this.employeeService.getListDivision().subscribe(data =>{
      this.divisionType = data;
    })
  }

  // onSubmit(createEmployeeForm: FormGroup) {
  //   this.createEmployeeForm = createEmployeeForm.value;
  //   console.log(createEmployeeForm.value);
  // }
  checkAges(dayOfBirths: AbstractControl) {
    // console.log(dayOfBirths.value);
    const births = new Date(dayOfBirths.value);
    const birthdays = Date.now() - births.getTime() - 86400000;
    const time = new Date(birthdays);
    console.log(time.getUTCFullYear());
    const age = time.getUTCFullYear() - 1970;
    console.log(age);
    if (age < 18) {
      return {'ageUnder': true};
    }
    return null;
  }

  saveEmployee() {
    if (!this.createEmployeeForm.invalid) {
      this.employeeService.createEmployee(this.createEmployeeForm.value).subscribe( () =>{
        console.log("Đã lấy được data");
        this.router.navigateByUrl("employee")
      });
      console.log(this.createEmployeeForm.value);
    }
  }
}
