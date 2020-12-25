import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LargeCardComponent } from './large-card/large-card.component';
import {RouterModule} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { InputFieldComponent } from './input-field/input-field.component';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [MenuComponent, LargeCardComponent, FooterComponent, InputFieldComponent],
    exports: [
        MenuComponent,
        LargeCardComponent,
        FooterComponent,
        InputFieldComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CoreModule { }
