
import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  fakeTodos: Todo[] = [
    {label: 'Сдать лабу'},
    {label: 'Lazy Loading'},
    {label: 'Service'},
    {label: 'Test'},
  ];

  tempTodo: Todo;

  getTodos(): Todo[] {
    return this.fakeTodos;
  }

  addTodo(value: string): void {
    this.tempTodo = {label: value};
    this.fakeTodos.unshift(this.tempTodo);
  }

}
