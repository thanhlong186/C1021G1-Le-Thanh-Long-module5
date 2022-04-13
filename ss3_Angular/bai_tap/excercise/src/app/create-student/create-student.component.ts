import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IStudent} from '../IStudent';
import {StudentDao} from '../StudentDao';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  createStudentForm: FormGroup;

  constructor() {
    this.createStudentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(20)]),
      point: new FormControl('', [Validators.required, Validators.min(0)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }

  ngOnInit() {
  }

  onSubmit(createStudentForm: FormGroup) {
    StudentDao.student.unshift(createStudentForm.value);

  }
}
