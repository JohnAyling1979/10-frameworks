import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  baseApiUrl = environment.apiBaseUrl;
  todos: string[] = [];
  todosSubjext = new Subject<string[]>();

  constructor(private http: HttpClient) {
  }

  public getTodos() {
    this.http.get<string[]>(`${this.baseApiUrl}/todos`).subscribe(todos => {
      this.todos = todos;
      this.todosSubjext.next(this.todos);
    });
  }

  public postTodo(todo: string) {
    this.http.post<string[]>(`${this.baseApiUrl}/todos`, {
      todo
    }).subscribe(todos => {
      this.todos = todos;
      this.todosSubjext.next(this.todos);
    });
  }

  public deleteTodo(todoId: string) {
    this.http.delete<string[]>(`${this.baseApiUrl}/todos/${todoId}`).subscribe(todos => {
      this.todos = todos;
      this.todosSubjext.next(this.todos);
    });
  }
}
