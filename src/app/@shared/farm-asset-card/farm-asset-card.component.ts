import { Component, OnInit, Input } from '@angular/core';
import { CodeFarmModule } from '../codeFarmCore';

@Component({
  selector: 'farm-asset-card',
  templateUrl: './farm-asset-card.component.html',
  styleUrls: ['./farm-asset-card.component.scss'],
})
export class FarmAssetCardComponent implements OnInit {
  // @Input() title: string;
  // @Input() name: string;
  // @Input() imageSource: string;

  @Input() model: CodeFarmModule.FarmAssetModel;
  @Input() count: number;

  constructor() {}

  ngOnInit(): void {}
}
