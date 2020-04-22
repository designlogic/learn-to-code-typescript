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
    
    
    
    }
  
    export class FarmAssetModel {
      title: string;
      name: string;
      imageSource: CodeFarmModule.ImagePaths;
      subTitle: string = '';
    }
  }
  