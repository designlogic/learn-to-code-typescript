
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonVariablesComponent } from './lesson-variables/lesson-variables.component';
import { SharedModule } from '../@shared/shared.module';
import { MaterialModule } from '../@core/material/material.module';



@NgModule({
  declarations: [
    LessonVariablesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
    
  

  ],
  exports: [
    LessonVariablesComponent
  ]
})
export class LessonsModule { }
