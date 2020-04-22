import { Component, OnInit } from '@angular/core';
import { CodeFarmModule } from '../../../app/@core/codeFarmCore';
import { CodeFarm } from '../../../app/codeFarm';

@Component({
  selector: 'lesson-variables',
  templateUrl: './lesson-variables.component.html',
  styleUrls: ['./lesson-variables.component.scss']
})
export class LessonVariablesComponent implements OnInit {


  chicken : CodeFarmModule.FarmAssetModel = {
    title:"Chickens",
    name:"chickenCount",
    imageSource: CodeFarmModule.ImagePaths.ChickenCard,
    subTitle:"0"
  }


  pig : CodeFarmModule.FarmAssetModel = {
    title:"Pigs",
    name:"pigCount",
    imageSource: CodeFarmModule.ImagePaths.PigCard,
    subTitle:"0"
  }

  sheep : CodeFarmModule.FarmAssetModel = {
    title:"Sheep",
    name:"sheepCount",
    imageSource: CodeFarmModule.ImagePaths.SheepCard,
    subTitle:"0"
  }


  constructor() { }

  ngOnInit(): void {


    var student = new CodeFarm();

this.chicken.subTitle = student.chickenCount.toString();
this.pig.subTitle = student.pigCount.toString();



  }

}
