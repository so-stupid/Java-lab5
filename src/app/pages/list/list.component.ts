import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {FormControl} from '@angular/forms';
import {TodosService} from '../../services/todos.service';
import {LargeCardService} from '../../services/large-card.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  addItemForm = new FormControl('');

  todos: Todo[];


  constructor(private todoService: TodosService, private largeCardService: LargeCardService) {
  }

  ngOnInit(): void {
    this.getTodos();
    this.largeCardService.setHead('Form Control');
    this.largeCardService.setTail('А здесь мы работаем с Form Control');
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }


}
