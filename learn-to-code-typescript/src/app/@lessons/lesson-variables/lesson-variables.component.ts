import { Component, OnInit } from '@angular/core';
import { CodeFarmModule } from '../../../app/@core/codeFarmCore';
import { CodeFarm } from '../../../app/codeFarm';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { TaskCompleteDialogComponent } from 'src/app/@shared/task-complete-dialog/task-complete-dialog.component';

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

this.chicken.subTitle = student.chickenCount?.toString();
this.pig.subTitle = student.pigCount?.toString();
this.sheep.subTitle = student.sheepCount?.toString();

if(student.chickenCount == 10 && student.pigCount == 30){
  this.showTaskComplete();

}

  }

  showTaskComplete(){

    // let dialogRef = dialog.open(UserProfileComponent, {
    //   height: '400px',
    //   width: '600px',
    // });
    let dialogRef = this.dialog.open(TaskCompleteDialogComponent, {
      height: '550px',
      width: '450px',
    });

  }

}
