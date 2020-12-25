import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TodosService} from '../../../services/todos.service';
import {Item} from '../classes/item';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public itemModel: Item;

  constructor(private todoService: TodosService) {
    this.itemModel = new Item();
  }

  // addItemForm = new FormControl('');

  public addItem(): boolean {
    this.todoService.addTodo(this.itemModel.value);
    return false;
  }
}
