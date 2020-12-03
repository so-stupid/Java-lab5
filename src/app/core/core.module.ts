import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LargeCardComponent } from './large-card/large-card.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [MenuComponent, LargeCardComponent],
  exports: [
    MenuComponent,
    LargeCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
