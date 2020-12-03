import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodosService} from '../../../services/todos.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private todoService: TodosService) {
  }
  addItemForm = new FormControl('');
  public addItem(addItemForm: FormControl): boolean{
    this.todoService.addTodo(addItemForm.value);
    return false;
  }
}
