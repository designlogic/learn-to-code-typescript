export module CodeFarmModule {
  export enum ImagePaths {
    Chicken = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/chicken.png',
    Cow = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/cow.png',
    Sheep = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/lamb.png',
    Pig = 'https://designlogicstorage.blob.core.windows.net/learn-to-code/pig.png',
  }

  export class FarmAssetModel {
    title: string;
    name: string;
    imageSource: CodeFarmModule.ImagePaths;
    subTitle: string = '';
  }
}
