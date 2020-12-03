import { Component, OnInit } from '@angular/core';
import {LargeCardService} from '../../services/large-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: LargeCardService) { }

  ngOnInit(): void {
    this.service.setHead('Домашняя страница');
    this.service.setTail('Стартовая точка приложения. Здесь есть краткое описание того, с чем нам придется столкнуться.');
  }

}
