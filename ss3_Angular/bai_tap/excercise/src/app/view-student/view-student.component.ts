import {Component, Input, OnInit} from '@angular/core';
import {IStudent} from '../IStudent';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  @Input()
  student: IStudent;

  constructor() { }

  ngOnInit(): void {
  }

}
