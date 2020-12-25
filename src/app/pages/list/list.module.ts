import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {CoreModule} from '../../core/core.module';
import { FormComponent } from './form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ListModule { }
