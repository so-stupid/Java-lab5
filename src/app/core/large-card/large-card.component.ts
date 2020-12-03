import { Component, OnInit } from '@angular/core';
import {LargeCardService} from '../../services/large-card.service';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent implements OnInit {

  constructor(private service: LargeCardService) {
  }
  head: string;
  tail: string;

  getHead(){
    this.head = this.service.getHead();
  }

  getTail(){
    this.tail = this.service.getTail();
  }

  ngOnInit(): void {
    this.getHead();
    this.getTail();

  }

}
