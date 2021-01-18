import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo(todo: Todo): Observable<Todo> {

    // const headers = new HttpHeaders({
    //   'MyCastomHeader': Math.random().toString()
    // })
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo,
      {
        headers: new HttpHeaders({
          'MyCastomHeader': Math.random().toString(),
          'sfrsefe': 'eshfes'
        })
      // headers: headers
      }
    );
  }

  fetchTodos(): Observable<Todo[]> {

    let params = new HttpParams()
    params = params.append('_limit', '4')
    params = params.append('castom', 'anything')

    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        // params: new HttpParams().set('_limit', '3')
        params: params
      })
      .pipe(
        delay(500),
        catchError(error => {
          console.log(error.message);
          return throwError(error)
        })

        );
  }

  removeTodo(id: number): Observable<void> {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        completed: true,
      }
    );
  }
}
