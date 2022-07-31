import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos();
    this.todoService.todosSubjext.subscribe(todos => this.todos = todos);
  }
}
