import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyFormComponent } from './my-form.component';



@NgModule({
  declarations: [
    MyFormComponent
  ],
  imports: [
    CommonModule,
    MyFormComponent,
    FormsModule
  ],
  exports: [
    MyFormComponent
  ]
})
export class MyFormModule { }
