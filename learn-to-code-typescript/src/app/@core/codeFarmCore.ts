import { MatDialog } from '@angular/material/dialog';
import { TaskCompleteDialogComponent } from '../@shared/task-complete-dialog/task-complete-dialog.component';

export module CodeFarmModule {
    export enum ImagePaths {
      Chicken = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/chicken.png',
      Cow = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/cow.png',
      Sheep = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/lamb.png',
      Pig = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/pig.png',
    
    
      ChickenCard = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/chickenCard.png',
      CowCard = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/cowCard.png',
      SheepCard = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/sheepCard.png',
      PigCard = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/pigCard.png',
    
    
      
      TileBarn = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-barn.png',
      TileCutHay = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-cut-hay.png',
      TileFertilize = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-fertilize.png',
      TileGreenHouse = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-green-house.png',
      TileHayDry = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-hay-dry.png',
      TileOrchard = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/tile-orchard.png',
    
      Ribbon = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/ribbon.png',
      Trophy = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/trophy.png',
    
    }
  
    export class FarmAssetModel {
      title: string;
      name: string;
      imageSource: CodeFarmModule.ImagePaths;
      subTitle: string = '';
    }


    export function showTaskCompleteDialog(dialog: MatDialog){
      let dialogRef = dialog.open(TaskCompleteDialogComponent, {
        height: '550px',
        width: '450px',
      });
    }

  }
  