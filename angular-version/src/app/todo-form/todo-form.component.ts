import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  form = new FormGroup({
    todo: new FormControl(''),
  });

  constructor(private todoService: TodosService) { }

  onSubmit() {
    this.todoService.postTodo(this.form.value.todo);

    this.form.reset();
  }
}
