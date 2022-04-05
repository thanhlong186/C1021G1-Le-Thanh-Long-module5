import {Component, OnInit} from '@angular/core';
import {IStudent} from '../IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: IStudent = {
    id: 1,
    name: 'Long',
    age: 25,
    address: 'Bắc Băng Dương',
    point: 10
  };
    color: string;
  constructor() {
  }

  ngOnInit(): void {
  }
  changedPoint(value) {
    this.student.point = value;
  }
  changedColor(color: string) {
    this.color = color;
  }
}
