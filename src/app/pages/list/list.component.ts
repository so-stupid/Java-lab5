import { Component, OnInit} from '@angular/core';
import { Todo } from '../../models/todo';
import {FormControl} from '@angular/forms';
import {TodosService} from '../../services/todos.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class  ListComponent implements OnInit{
  addItemForm = new FormControl('');

  todos: Todo[];

  constructor(private todoService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }


}
