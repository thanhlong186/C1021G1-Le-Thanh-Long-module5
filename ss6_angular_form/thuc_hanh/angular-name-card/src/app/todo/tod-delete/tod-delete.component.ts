import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tod-delete',
  templateUrl: './tod-delete.component.html',
  styleUrls: ['./tod-delete.component.css']
})
export class TodDeleteComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
      this.todo = value;
    });
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() =>
      this.router.navigateByUrl(''));
  }

}
