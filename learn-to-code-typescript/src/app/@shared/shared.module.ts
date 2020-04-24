import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmAssetCardComponent } from './farm-asset-card/farm-asset-card.component';
import { MaterialModule } from '../@core/material/material.module';
import { TaskCompleteDialogComponent } from './task-complete-dialog/task-complete-dialog.component';



@NgModule({
  declarations: [FarmAssetCardComponent, TaskCompleteDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[FarmAssetCardComponent]
})
export class SharedModule { }
