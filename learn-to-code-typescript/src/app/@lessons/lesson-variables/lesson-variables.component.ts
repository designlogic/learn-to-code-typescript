import { Component, OnInit } from '@angular/core';
import { CodeFarmModule } from '../../../app/@core/codeFarmCore';
import { CodeFarm } from '../../../app/codeFarm';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

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


  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {


    var student : any = new CodeFarm();


    this.chicken.subTitle = student.chickenCount ? student.chickenCount.toString() : "0";
    this.pig.subTitle = student.pigCount ? student.pigCount.toString() : "0";
    this.sheep.subTitle = student.sheepCount ? student.sheepCount.toString() : "0";
    
    
    
    
    if(student.chickenCount == 10 && student.pigCount == 300)
    {

      CodeFarmModule.showTaskCompleteDialog(this.dialog);

    }
    

  }


}
