import { Component, OnInit } from '@angular/core';
import { CodeFarmModule } from '../../../app/@core/codeFarmCore';

@Component({
  selector: 'app-task-complete-dialog',
  templateUrl: './task-complete-dialog.component.html',
  styleUrls: ['./task-complete-dialog.component.scss']
})
export class TaskCompleteDialogComponent implements OnInit {

  public imageSource = CodeFarmModule.ImagePaths.Trophy;
  constructor() {  }

  ngOnInit(): void {
  }

}
