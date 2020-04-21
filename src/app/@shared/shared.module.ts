import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { FarmAssetCardComponent } from './farm-asset-card/farm-asset-card.component';
import { CodeFarmModule } from './codeFarmCore';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, FarmAssetCardComponent],
  exports: [LoaderComponent, FarmAssetCardComponent],
})
export class SharedModule {}
