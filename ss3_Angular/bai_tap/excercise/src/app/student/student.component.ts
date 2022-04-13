import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../IStudent';
import {StudentDao} from '../StudentDao';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  studentNew: IStudent;
  getValue(value: IStudent){
    this.studentNew = value;
    console.log(value);
    console.log(this.studentNew);
  }

  student: IStudent[] = StudentDao.student;
    color: string;
  constructor() {
  }

  ngOnInit(): void {
  }
  // changedPoint(value) {
  //   this.student.point = value;
  // }

  changedColor(color: string) {
    this.color   = color;
  }
}
