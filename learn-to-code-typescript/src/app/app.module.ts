import { TaskCompleteDialogComponent } from './@shared/task-complete-dialog/task-complete-dialog.component';
import { LessonsModule } from './@lessons/lessons.module';
import { SharedModule } from './@shared/shared.module';
import { MaterialModule } from './@core/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

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
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[TaskCompleteDialogComponent]
})
export class AppModule { }
