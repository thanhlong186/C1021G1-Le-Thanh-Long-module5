import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodDeleteComponent} from './todo/tod-delete/tod-delete.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';


const routes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'create', component: TodoCreateComponent},
  {path: 'delete/:id', component: TodDeleteComponent},
  {path: 'update/:id', component: TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
