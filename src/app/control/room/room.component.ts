import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { RoomInfo } from '../entities/roomInfo';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {

  modes = [
    'Automatik',
    'Automatik',
    'Entfeuchten',
    'Heizen',
    'Kühlen',
    'Ausgeschalten',
    'Lüften',
    'Automatik'
  ];

  info: RoomInfo;

  @Input()
  set roomInfo(roomInfo: RoomInfo) {
    this.info = roomInfo;

  }

  thresholdConfig = {
    0: {color: 'blue'},
    22: {color: 'orange'},
    30: {color: 'red'}
  };

  constructor() { }

  ngOnInit(): void {

  }

}
