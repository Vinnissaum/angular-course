import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MySecondComponent } from './my-second/my-second.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent,
    MyFormComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
