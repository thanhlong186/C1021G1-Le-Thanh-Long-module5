import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Todo} from '../../Todo';
import {TodoService} from '../service/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  updateForm: FormGroup;
  todo = new Todo();
  constructor(private todoService: TodoService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.todoService.findById(id).subscribe(value => {
        this.todo = value;
      }, error => {
      },
      () => this.updateForm.patchValue(this.todo));
    this.updateForm = new FormGroup({
      id: new FormControl(),
      content: new FormControl(),
      complete: new FormControl()
    });
  }

  updateTodo() {
    this.todoService.update(this.updateForm.value).subscribe(() =>
      this.router.navigateByUrl(''));
  }


}
