import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DivisionList} from '../model/DivisionList';
import {EducationDegreeList} from '../model/EducationDegreeList';
import {PositionList} from '../model/PositionList';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  divisionList: DivisionList[];
  educationList: EducationDegreeList[];
  positionList: PositionList[];

  constructor(private employeeService: EmployeeServiceService,
              private router: Router,
              private snackBar: MatSnackBar,
              private activated: ActivatedRoute) { }

  editEmployeeForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required,]),
    dayOfBirth: new FormControl('', [Validators.required, this.checkAges]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|7|8|5|9])+([0-9]{8,9})$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    salary: new FormControl('',[Validators.required, Validators.min(0)]),
    position: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
  })

  ngOnInit(): void {
    this.employeeService.getInforEmployee(this.activated.snapshot.params.id).subscribe(data => {
      this.editEmployeeForm.setValue(data);
    });
    this.employeeService.getListPosition().subscribe(data => {
      this.positionList = data;
    });
    this.employeeService.getListEducation().subscribe(data => {
      this.educationList = data;
    });
    this.employeeService.getListDivision().subscribe(data => {
      this.divisionList = data;
  });
  }

  getAllDivisionList() {
    this.employeeService.getListDivision().subscribe(data => {
      this.divisionList = data;
    });
  }
  getAllEducationList() {
    this.employeeService.getListEducation().subscribe(data => {
      this.educationList = data;
    });
  }
  getAllPositionList() {
    this.employeeService.getListPosition().subscribe(data => {
      this.positionList = data;
    });
  }
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


  updateEmplyee() {
    this.employeeService.updateEmployee(this.activated.snapshot.params.id, this.editEmployeeForm.value).subscribe(() => {
      console.log("Đã lấy dữ liệu thành công");
      this.router.navigateByUrl('employee');
      this.snackBar.open("Đã cấp nhật thành công")
      }
    )
  }
}
