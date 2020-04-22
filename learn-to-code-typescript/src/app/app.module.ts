import { LessonsModule } from './@lessons/lessons.module';
import { SharedModule } from './@shared/shared.module';
import { MaterialModule } from './@core/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    LessonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
