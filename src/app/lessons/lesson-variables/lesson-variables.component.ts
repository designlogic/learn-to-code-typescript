import { FarmAssetCardComponent } from './../../@shared/farm-asset-card/farm-asset-card.component';
import { Component, OnInit } from '@angular/core';
import { CodeFarmModule } from '@app/@shared/codeFarmCore';
import { CodeFarm } from '@app/student/codeFarm';

@Component({
  selector: 'lesson-variables',
  templateUrl: './lesson-variables.component.html',
  styleUrls: ['./lesson-variables.component.scss']
})
export class LessonVariablesComponent implements OnInit {


  chicken : CodeFarmModule.FarmAssetModel = {
    title:"Chickens",
    name:"chickenCount",
    imageSource: CodeFarmModule.ImagePaths.Chicken,
    subTitle:"0"
  }


  pig : CodeFarmModule.FarmAssetModel = {
    title:"Pigs",
    name:"pigCount",
    imageSource: CodeFarmModule.ImagePaths.Pig,
    subTitle:"0"
  }

  sheep : CodeFarmModule.FarmAssetModel = {
    title:"Sheep",
    name:"sheepCount",
    imageSource: CodeFarmModule.ImagePaths.Sheep,
    subTitle:"0"
  }


  constructor() { }

  ngOnInit(): void {


    var student = new CodeFarm();

this.chicken.subTitle = student.chickenCount.toString();
this.pig.subTitle = student.pigCount.toString();


  }

}
