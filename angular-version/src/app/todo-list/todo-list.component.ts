import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodosService } from 'src/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: string[] = [];
  todosSubscription: Subscription | null = null;

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getTodos();
    this.todosSubscription = this.todoService.todosSubjext.subscribe(todos => this.todos = todos);
  }

  ngOnDestroy(): void {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }
}
