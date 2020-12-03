import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LargeCardComponent } from './large-card/large-card.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';



@NgModule({
    declarations: [MenuComponent, LargeCardComponent, FooterComponent],
    exports: [
        MenuComponent,
        LargeCardComponent,
        FooterComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
