import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmAssetCardComponent } from './farm-asset-card/farm-asset-card.component';
import { MaterialModule } from '../@core/material/material.module';



@NgModule({
  declarations: [FarmAssetCardComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[FarmAssetCardComponent]
})
export class SharedModule { }
