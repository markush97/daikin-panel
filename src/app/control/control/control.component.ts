import { AfterContentInit, Component, ViewChild } from '@angular/core';
import { RoomInfo } from '../entities/roomInfo';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  @ViewChild('roomGrid') roomGrid: MatGridList;

  roomInfos: RoomInfo[] = [
    {
      name: 'Schlafzimmer',
      location: 'Barichgasse',
      tempCurrent: 15,
      tempTarget: 15,
      holiday: false,
      mode: 3,
      ip: '10.244.12.181',
    },
    {
      name: 'Wohnzimmer',
      location: 'Barichgasse',
      tempCurrent: 15,
      tempTarget: 15,
      holiday: false,
      mode: 1,
      ip: '10.244.12.182',
    },
    {
      name: 'Arbeitszimmer',
      location: 'Barichgasse',
      tempCurrent: 40,
      tempTarget: 40,
      holiday: false,
      mode: 5,
      ip: '10.244.12.183',

    },
    {
      name: 'Büro Thomas',
      location: 'Landstraße',
      tempCurrent: 22,
      tempTarget: 22,
      holiday: false,
      mode: 2,
      ip: '10.244.3.181',
    },
    {
      name: 'Büro Moni',
      location: 'Landstraße',
      tempCurrent: 35,
      tempTarget: 35,
      holiday: false,
      mode: 1,
      ip: '10.244.3.182',
    },
    {
      name: 'Büro Assistentin',
      location: 'Landstraße',
      tempCurrent: 25,
      tempTarget: 25,
      holiday: false,
      mode: 0,
      ip: '10.244.3.183',
    },
];
}
