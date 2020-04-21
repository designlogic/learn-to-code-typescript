import { SharedModule } from '@shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonVariablesComponent } from './lesson-variables/lesson-variables.component';



@NgModule({
  declarations: [LessonVariablesComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[
    LessonVariablesComponent
  ]
})
export class LessonsModule { }
