import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo:string = '';
  @Input() todoId:string = '';

  constructor(private todoService: TodosService) { }

  deletePost() {
    this.todoService.deleteTodo(this.todoId)
  }
}
